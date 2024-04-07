// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
    project name: Evault System
    Description:  Creating a secure e-vault system on an Ethereum blockchain.
    0x985903b80aa7e5824a156C8f301F5822274966E7
*/
// this is amey's line

contract VaultSystem {

    // Structures
    struct UserInfo {
        string username;
        string email;
        string phoneNumber;
        address account;
        string profileImgUrl;
        string about;
        bool access;
    }

    struct FileMetaData {
        string file_name;
        string file_url;
        string file_type;
        uint256 file_size;
        uint256 upload_timestamp;
        string description;
    }

    // Mappings
    mapping(address => UserInfo) users;
    mapping(address => FileMetaData[]) userImages;

    // Functions

    function addUser(
        string memory _username,
        string memory _email,
        string memory _phoneNumber,
        address _account,
        string memory _profileImgUrl,
        
        string memory _about,
        bool _access
    ) public {
       require(users[_account].account == address(0), "User is already registered");
        UserInfo memory newUser;
        newUser.username = _username;
        newUser.account = _account;
        newUser.profileImgUrl = _profileImgUrl;
        
        newUser.about = _about;
        newUser.access = _access;
        newUser.email = _email;
        newUser.phoneNumber = _phoneNumber;

        
        users[_account] = newUser;
    }

    function addUserImage(
        address _account,
        string memory _file_name,
        string memory _file_url,
        string memory _file_type,
        uint256 _file_size,
        uint256 _upload_timestamp,
        string memory _description
    ) public {
        userImages[_account].push(FileMetaData(
            _file_name,
            _file_url,
            _file_type,
            _file_size,
            _upload_timestamp,
            _description
        ));
    }

    function getUser(address _userAddress) public view returns (
    string memory username,
    string memory profileImgUrl,
    string memory email,
    string memory phoneNumber,
    string memory about,
    bool access
) {
    UserInfo memory user = users[_userAddress];
    require(user.account != address(0), "User not found");

    return (
        user.username,
        user.profileImgUrl,
       user.email,
       user.phoneNumber,
        user.about,
        user.access
    );
}

function getUserFiles(address _userAddress) public view returns (FileMetaData[] memory){
    return userImages[_userAddress];

}


    
}
