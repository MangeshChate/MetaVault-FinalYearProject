// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";


/*
    Project Name : E-Vault
    Project Description : In This Smart Contract user Able To Register , POST and GET Files 
    Currency_Name : MapCoin (MAP)
    Deployed_Hash : 0x3D09A65AD6343b0197530377402E36fCd1649848

*/

contract MapCoinVault is ERC20, ERC20Permit, Ownable(msg.sender) {
    uint256 public constant INITIAL_SUPPLY = 300;
    uint256 public constant INITIAL_TOKEN_BALANCE = 30;
    uint256 public constant TOKEN_DEDUCTED = 5;
    address payable ownerAddress = payable(owner());

    struct UserInfo {
        string username;
        string email;
        string phoneNumber;
        string profileImgUrl;
        string about;
        bool access;
        uint256 tokenBalance;
    }

    struct FileMetaData {
        string file_name;
        string file_url;
        string file_type;
        uint256 upload_timestamp;
        string description;
    }

    mapping(address => UserInfo) public users;
    mapping(address => FileMetaData[]) public userImages;

    event TokensMinted(address indexed user, uint256 amount);
    event TokensBurned(address indexed user, uint256 amount);

    constructor() ERC20("MapCoin", "MAP") ERC20Permit("MapCoin") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function addUser(
        string memory _username,
        string memory _email,
        string memory _phoneNumber,
        address _account,
        string memory _profileImgUrl,
        string memory _about,
        bool _access
    ) external {
        require(!isUserRegistered(_account), "User is already registered");
        UserInfo memory newUser;
        newUser.username = _username;
        newUser.profileImgUrl = _profileImgUrl;
        newUser.about = _about;
        newUser.access = _access;
        newUser.email = _email;
        newUser.phoneNumber = _phoneNumber;

        users[_account] = newUser;

        mintTokensForUser(_account, INITIAL_TOKEN_BALANCE);
    }

    function addUserImage(
        string memory _file_name,
        string memory _file_url,
        string memory _file_type,
        uint256 _upload_timestamp,
        string memory _description
    ) external {
        UserInfo storage user = users[msg.sender];
        require(user.tokenBalance >= TOKEN_DEDUCTED, "Insufficient balance");
        
        userImages[msg.sender].push(FileMetaData(
            _file_name,
            _file_url,
            _file_type,
            _upload_timestamp,
            _description
        ));

        _burn(msg.sender, TOKEN_DEDUCTED);
        user.tokenBalance -= TOKEN_DEDUCTED;
        emit TokensBurned(msg.sender, TOKEN_DEDUCTED);
    }

    function mintTokensForUser(address _user, uint256 _amount) internal {
        _mint(_user, _amount);
        users[_user].tokenBalance += _amount;
        emit TokensMinted(_user, _amount);
    }

    function isUserRegistered(address _userAddress) public view returns (bool) {
        return users[_userAddress].tokenBalance != 0;
    }

    function getUser(address _userAddress) external view returns (
        string memory username,
        string memory profileImgUrl,
        string memory email,
        string memory phoneNumber,
        string memory about,
        bool access,
        uint256 tokenBalance
    ) {
        UserInfo memory user = users[_userAddress];

        return (
            user.username,
            user.profileImgUrl,
            user.email,
            user.phoneNumber,
            user.about,
            user.access,
            user.tokenBalance
        );
    }

    function getUserFiles(address _userAddress) external view returns (FileMetaData[] memory) {
        return userImages[_userAddress];
    }

    function deleteFileByAttributes(
        string memory _file_name,
        string memory _file_url
    ) external {
        FileMetaData[] storage userFiles = userImages[msg.sender];
        for (uint256 i = 0; i < userFiles.length; i++) {
            if (keccak256(bytes(userFiles[i].file_name)) == keccak256(bytes(_file_name)) &&
                keccak256(bytes(userFiles[i].file_url)) == keccak256(bytes(_file_url))) {
                delete userImages[msg.sender][i];
                return;
            }
        }
        revert("File not found");
    }

    //Payment Integration 
       function mintTokensWithSubscription_0_0001Ether() external payable {
        require(msg.value == 100000000000000, "Ether amount must be 0.0001");
        address sender = msg.sender;
        ownerAddress.transfer(msg.value); 
        mintTokensForUser(sender, 30);
    }

    function mintTokensWithSubscription_0_001Ether() external payable {
        require(msg.value == 1000000000000000, "Ether amount must be 0.001");
        address sender = msg.sender;
        ownerAddress.transfer(msg.value); 
        mintTokensForUser(sender, 40);
    }

    function mintTokensWithSubscription_0_01Ether() external payable {
        require(msg.value == 10000000000000000, "Ether amount must be 0.01");
        address sender = msg.sender;
        ownerAddress.transfer(msg.value); 
        mintTokensForUser(sender, 100);
    }

}
