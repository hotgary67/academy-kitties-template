pragma solidity ^0.5.12;

//gebleven bij contract address, address this klopt niet
// daarna 0 address zien te verfieren
//ownerOf functie werkt niet, komt de hele tijd een 0 address uit

import "./IERC721.sol";

contract Kittycontract is IERC721 {
       
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
  
    string public constant name = "Crazy Cats";
    string public constant symbol = "CCS";


    // uint256 public totalTokenCountOwner[0] += 100;
   

    struct Kitty {
        uint256 genes;
        uint64  birthTime;
        uint32  mumId;
        uint32  dadId;
        uint16  generation;
                       
       }

      Kitty [] Kitties; 

   mapping(uint256 => address) public addressOfOwnerKitty;
   mapping(address => uint256) private totalTokenCountOwner;    
   mapping (uint256 => address) private _tokenOwner;
 

   function balanceOf(address owner) external view returns (uint256 balance) {
            return totalTokenCountOwner[owner];
            
            }   

    //function totalSupply() external view returns (uint256 total) {
    //    return Kitties.lenght; moet iets zijn met .lenght
   // }
                        
    function tokenName() external view returns (string memory tokenName) {
         return name;
    
        }
    function tokenSymbol() external view returns (string memory tokenSymbol) {
        return symbol;

        }
    function ownerOf(uint256 tokenId) external view returns (address owner)  {
       // address owner = _tokenOwner[tokenId];
         //return _tokenOwner;


      //  require (owner !=address(0));
       return owner;

    }
   
   function transfer(address to, uint256 tokenId) external {
       
       address currentOwner = msg.sender;
       address newOwner = to;        

        require(currentOwner == ownerOf(tokenId), "You are not the owner of this Kitty");   
        require(to != address(0), "Cannot send to zero address");
        require(to != address(this), "Cannot send to contract address");

        totalTokenCountOwner[currentOwner] -= tokenId;  
        totalTokenCountOwner[newOwner] += tokenId;

        emit Transfer(currentOwner, newOwner, tokenId);
           
      }   



  function mint(address newOwner, uint256 tokenId) public returns uint256{
       
         totalTokenCountOwner[newOwner] += tokenId;
       
       // totalTokenCountOwner[newOwner] += amount;
   

  }
}