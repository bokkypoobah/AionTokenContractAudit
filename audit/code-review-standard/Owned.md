# Owned

Source file [../../standard/contracts/Owned.sol](../../standard/contracts/Owned.sol).

<br />

<hr />

```javascript
/**
 * Copyright (C) 2017 Aion Foundation
 */
// BK Ok
pragma solidity ^0.4.15;

// BK Ok
contract Owned {
    // BK Next 2 Ok
    address public owner;
    address public newOwner;

    /**
     * Events
     */
    // BK Ok - Event
    event ChangedOwner(address indexed new_owner);

    /**
     * Functionality
     */

    // BK Ok - Constructor
    function Owned() {
        // BK Ok
        owner = msg.sender;
    }

    // BK Ok
    modifier onlyOwner() {
        // BK Ok
        require(msg.sender == owner);
        // BK Ok
        _;
    }

    // BK Ok - Only owner can execute
    function changeOwner(address _newOwner) onlyOwner external {
        // BK Ok
        newOwner = _newOwner;
    }

    // BK Ok - Only new owner can execute
    function acceptOwnership() external {
        // BK Ok
        if (msg.sender == newOwner) {
            // BK Ok
            owner = newOwner;
            // BK Ok
            newOwner = 0x0;
            // BK Ok - Log event
            ChangedOwner(owner);
        }
    }
}

// BK Ok - Interface of the above
contract IOwned {
    // BK Ok
    function owner() returns (address);
    // BK Ok
    function changeOwner(address);
    // BK Ok
    function acceptOwnership();
}
```
