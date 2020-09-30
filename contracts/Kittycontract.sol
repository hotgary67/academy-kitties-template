pragma solidity ^0.5.12;


import "./IERC721.sol";

contract Kittycontract is IERC721 {
       
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

  
    string public constant name = "Crazy Cats";
    string public constant symbol = "CCS";


    struct Kitty {
        uint256 genes;
        uint64  birthTime;
        uint32  mumId;
        uint32  dadId;
        uint16  generation;
                       
       }

      Kitty [] Kitties; 

 
   mapping(address => uint256) private totalTokenCountOwner;    
   mapping (uint256 => address) public tokenOwner;
   //  mapping(uint256 => address) public addressOfOwnerKitty;
  // mapping (uint256 => address) public tokenOwner;
     

   function balanceOf(address owner) external view returns (uint256 balance) {
            return totalTokenCountOwner[owner];
            
            }   

    function totalSupply() external view returns (uint256 total) {
       return Kitties.length;
   }
                        
    function tokenName() external view returns (string memory tokenName) {
         return name;
    
        }
    function tokenSymbol() external view returns (string memory tokenSymbol) {
        return symbol;

        }
    function ownerOf(uint256 tokenId) external view returns (address owner)  {
       
          return tokenOwner[tokenId];
       


    }
   
   function transfer(address to, uint256 tokenId) external {
         
      require(tokenOwner[tokenId] != address(0), "This token does not exist"); 
      require(tokenOwner[tokenId] == msg.sender, "You are not the owner of this Kitty"); 
    
      require(to != address(0), "Cannot send to zero address");
      require(to != address(this), "Cannot send to contract address");
         
      tokenOwner[tokenId] == msg.sender;
      address newOwner = to;  
      
      //set new owner token
      tokenOwner[tokenId] = newOwner;
      
      totalTokenCountOwner[to] += 1 ; 
      totalTokenCountOwner[msg.sender] -= 1 ; 
 
     emit Transfer(msg.sender,newOwner, tokenId);
       
             
      }   


function mint(address to, uint tokenId) public returns(uint256) {
    
//  require statement dat je geen tokens met dezelfde ID kan minten
   tokenOwner[tokenId] = to;
   totalTokenCountOwner[to] += 1 ; 
   
    return tokenId; 
}
}
