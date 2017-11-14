# Administrator

Source file [../../standard/contracts/Administrator.sol](../../standard/contracts/Administrator.sol).

<br />

<hr />

```javascript
/**
 * Copyright (C) 2017 Aion Foundation
 */
// BK Ok
pragma solidity ^0.4.15;

// BK Ok
import {Owned} from './Owned.sol';

/**
 * Represents a contract that supports validated third parties, a basic use for this
 * would be a contract administrator that requires a third party perform some action.
 * 
 * Instead of the third party requiring ownership of the contract (potentially exposing
 * the contract to malicious activities), the owner defines certain actions the
 * party can take through the modifier.
 */
// BK Ok
contract Administrator is Owned {
    
    // BK Ok
    mapping(address => bool) public admins;

    /**
     * Modifier implicitly assumes that Owner is automatically
     * an administrator, this fact cannot be changed.
     */
    // BK Ok
    modifier onlyAdministrator(address _address) {
        // BK Ok
        require(_address == owner || admins[_address]);
        // BK Ok
        _;
    }

    // BK Ok - Only owner can execute
    function addAdmin(address _address)
        onlyOwner
        external
    {
        // BK Ok
        require(_address != owner && !(admins[_address]));
        // BK Ok
        admins[_address] = true;
    }

    // BK Ok - Only owner can execute
    function delAdmin(address _address)
        onlyOwner
        external
    {
        // BK Ok
        require(_address != owner && admins[_address]);
        // BK Ok
        admins[_address] = false;
    }
}
```
