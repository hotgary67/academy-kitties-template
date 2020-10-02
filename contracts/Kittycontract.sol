pragma solidity ^0.5.12;
pragma experimental ABIEncoderV2;
import "./IERC721.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable {

      event Birth(
        address owner,
        uint256 kittenId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes
    );
     event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );


    string public constant name = "Crazy Cats";
    string public constant symbol = "CCS";

    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] Kitties;

    mapping(address => uint256) private totalTokenCountOwner;
    mapping(uint256 => address) public tokenOwner;


    function createKittyGen0(uint256 _genes) public onlyOwner {
        
        owner = msg.sender;
        
       _createKitty(0, 0, 0, _genes, owner);

       //return  _genes

}

 function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        uint256 newKittenId = Kitties.push(_kitty) - 1;

        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newKittenId);
   

        return newKittenId;
    }
    

    function getKitty(uint256 index) public view returns(Kitty memory) {
         return Kitties[index];
}
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

    function ownerOf(uint256 tokenId) external view returns (address owner) {
        return tokenOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external {
        require(tokenOwner[tokenId] != address(0), "This token does not exist");
        require(
            tokenOwner[tokenId] == msg.sender,
            "You are not the owner of this Kitty"
        );

        require(to != address(0), "Cannot send to zero address");
        require(to != address(this), "Cannot send to contract address");

        tokenOwner[tokenId] == msg.sender;
        address newOwner = to;

        //set new owner token
        tokenOwner[tokenId] = newOwner;

        totalTokenCountOwner[to] ++;
       totalTokenCountOwner[msg.sender] --;
    
        emit Transfer(msg.sender, newOwner, tokenId);
    }

       function _transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) internal {
        totalTokenCountOwner[_to]++;

        tokenOwner[_tokenId] = _to;

        if (_from != address(0)) {
            totalTokenCountOwner[_from]--;
        }

        emit Transfer(_from, _to, _tokenId);
    }

  
    }

