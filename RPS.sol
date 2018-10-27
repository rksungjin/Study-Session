pragma solidity ^0.4.24;
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/ownership/Ownable.sol";
contract RPS is Ownable {
    
    address public player1;
    address public player2;
    uint256 public stake;
   
    enum Move {NULL, ROCK, PAPER, SCISSORS}
    
    Move private player1Selection;
    Move private player2Selection;
    
    modifier onlyPlayer2 {
        require (msg.sender == player2, "Only player 2 can call this function");
        _;
    }
    
    event NewMove (address _player, Move _selection);
    
    constructor (address _player2, Move _selection) public payable {
        player1 = msg.sender;
        player2 = _player2;
        stake = msg.value;
        player1Selection = _selection;
    }
    
    function submitSelection (Move _selection) public payable onlyPlayer2 {
        require (msg.value == stake, "Must submit the same stake as player 1");
        require (player2Selection == Move.NULL, "You have already made a selection");
        
        player2Selection = _selection;
        
        emit NewMove (msg.sender, _selection);
    }
    
    function determineWinner() public onlyOwner {
        require (player2Selection != Move.NULL);
        uint256 totalStaked = address(this).balance;
        
        if (player1Selection == player2Selection) {
            player1.send(totalStaked / 2);
            player2.send(totalStaked / 2);
        } else if (player1Selection == Move.NULL) {
            player2.transfer(totalStaked);
        } else if (uint8(player1Selection) % 2 == uint8(player2Selection) % 2) {
            if (player1Selection == Move.ROCK) {
                player1.transfer(totalStaked);
            } else {
                player2.transfer(totalStaked);
            }
        } else {
            if (player1Selection > player2Selection) {
                player1.transfer(totalStaked);
            } else {
                player2.transfer(totalStaked);
            }
        }
    }
    
    
    
}