var savingsOutput={"contracts":{"Savings.sol:Savings":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tok\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"availableForWithdrawalAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"total\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addrs\",\"type\":\"address[]\"}],\"name\":\"bulkWithdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"inited\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"intervalSecs\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isStarted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"withdrawn\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalizeInit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"withdrawTo\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"multiMint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"t0special\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startBlockTimestamp\",\"type\":\"uint256\"}],\"name\":\"start\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deposit\",\"type\":\"uint256\"},{\"name\":\"_withdrawn\",\"type\":\"uint256\"},{\"name\":\"_blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"_withdrawTo\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"periods\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startBlockTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"bulkDepositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_periods\",\"type\":\"uint256\"}],\"name\":\"init\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalfv\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"deposited\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"locked\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"precision\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"nullify\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"period\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"lock\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nullified\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintingNonce\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"periodAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"beneficiary\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"depositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"who\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdraws\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"who\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"}]","bin":"60606040526000600455341561001457600080fd5b5b60028054600160a060020a03191633600160a060020a03161790555b5b611224806100416000396000f300606060405236156101b15763ffffffff60e060020a60003504166305ab421d81146101c4578063144fa6d7146101e857806328bf2448146102095780632ddbd13a146102315780632ed94f6c146102565780633ccfd60b146102a757806343c885ba146102ce5780634cbf867d146102f5578063544736e61461031a5780636ef610921461034157806372a02f1d1461037257806372b0d90c1461038757806379ba5097146103ba57806388df13fa146103cf5780638da5cb5b1461042557806390e2b94b1461045457806395805dad146104795780639fe2c45814610491578063a4caeb42146104bf578063a6f9dae1146104e4578063ac3dc9aa14610505578063b11e38891461052a578063b6b55f251461057b578063b7b0422d14610593578063c3af702e146105ab578063cb13cddb146105d0578063cf30901214610601578063d3b5dc3b14610628578063d4ee1d901461064d578063ece20f361461067c578063ef78d4fd14610691578063f83d08ba146106b6578063f9df65eb146106cb578063fbb0eb8b146106f2578063fc0c546a14610717578063fc207c8f14610746578063ffaad6a51461076e575b34156101bc57600080fd5b5b600080fd5b005b34156101cf57600080fd5b6101c2600160a060020a0360043516602435610792565b005b34156101f357600080fd5b6101c2600160a060020a0360043516610853565b005b341561021457600080fd5b61021f60043561089b565b60405190815260200160405180910390f35b341561023c57600080fd5b61021f6108cc565b60405190815260200160405180910390f35b341561026157600080fd5b6101c260046024813581810190830135806020818102016040519081016040528093929190818152602001838360200280828437509496506108d295505050505050565b005b34156102b257600080fd5b6102ba610920565b604051901515815260200160405180910390f35b34156102d957600080fd5b6102ba610943565b604051901515815260200160405180910390f35b341561030057600080fd5b61021f610953565b60405190815260200160405180910390f35b341561032557600080fd5b6102ba610958565b604051901515815260200160405180910390f35b341561034c57600080fd5b61021f600160a060020a036004351661097b565b60405190815260200160405180910390f35b341561037d57600080fd5b6101c261098d565b005b341561039257600080fd5b6102ba600160a060020a03600435166109e8565b604051901515815260200160405180910390f35b34156103c557600080fd5b6101c2610b74565b005b34156103da57600080fd5b6101c260048035906044602480359081019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610bc195505050505050565b005b341561043057600080fd5b610438610cfa565b604051600160a060020a03909116815260200160405180910390f35b341561045f57600080fd5b61021f610d09565b60405190815260200160405180910390f35b341561048457600080fd5b6101c2600435610d0f565b005b341561049c57600080fd5b61021f600435602435604435610de8565b60405190815260200160405180910390f35b34156104ca57600080fd5b61021f610e41565b60405190815260200160405180910390f35b34156104ef57600080fd5b6101c2600160a060020a0360043516610e47565b005b341561051057600080fd5b61021f610e8f565b60405190815260200160405180910390f35b341561053557600080fd5b6101c26004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610e9595505050505050565b005b341561058657600080fd5b6101c2600435610f2f565b005b341561059e57600080fd5b6101c2600435610f4e565b005b34156105b657600080fd5b61021f610faf565b60405190815260200160405180910390f35b34156105db57600080fd5b61021f600160a060020a0360043516610fb5565b60405190815260200160405180910390f35b341561060c57600080fd5b6102ba610fc7565b604051901515815260200160405180910390f35b341561063357600080fd5b61021f610fd7565b60405190815260200160405180910390f35b341561065857600080fd5b610438610fe3565b604051600160a060020a03909116815260200160405180910390f35b341561068757600080fd5b6101c2610ff2565b005b341561069c57600080fd5b61021f61101e565b60405190815260200160405180910390f35b34156106c157600080fd5b6101c261102f565b005b34156106d657600080fd5b6102ba611073565b604051901515815260200160405180910390f35b34156106fd57600080fd5b61021f61107c565b60405190815260200160405180910390f35b341561072257600080fd5b610438611082565b604051600160a060020a03909116815260200160405180910390f35b341561075157600080fd5b61021f600435611091565b60405190815260200160405180910390f35b341561077957600080fd5b6101c2600160a060020a03600435166024356110cf565b005b60025433600160a060020a039081169116146107ad57600080fd5b60035460a860020a900460ff161580156107c75750600454155b15156107d257600080fd5b600554600160a060020a031663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561083157600080fd5b6102c65a03f1151561084257600080fd5b505050604051805150505b5b5b5050565b60025433600160a060020a0390811691161461086e57600080fd5b6005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000805460015401670de0b6b3a76400006108b584611091565b60015401028115156108c357fe5b0490505b919050565b60085481565b600a5460009060ff16156108e557600080fd5b5060005b815181101561084d5761091082828151811061090157fe5b906020019060200201516109e8565b505b6001016108e9565b5b5b5050565b600a5460009060ff161561093357600080fd5b61093c336109e8565b90505b5b90565b60035460a060020a900460ff1681565b601e81565b60035460009060a860020a900460ff16801561093c575060045415155b90505b90565b60096020526000908152604090205481565b60025433600160a060020a039081169116146109a857600080fd5b60035460a060020a900460ff16156109bf57600080fd5b6003805474ff0000000000000000000000000000000000000000191660a060020a1790555b5b5b565b600080600080600360159054906101000a900460ff168015610a0b575060045415155b1515610a1657600080fd5b600a5460ff1615610a2657600080fd5b600160a060020a0385166000908152600660209081526040808320546009909252909120549093509150610a5b838342610de8565b9050801515610a6d5760009350610b6a565b6007546008548402811515610a7e57fe5b048183011115610a8d57600080fd5b600554600160a060020a031663a9059cbb868360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610aec57600080fd5b6102c65a03f11515610afd57600080fd5b505050604051805190501515610b1257600080fd5b600160a060020a038516600081815260096020526040908190208054840190557ff2f18af2e726e5e26f2cd45a44f8614032a8c7909601c09dc1f40e7c731ec06b9083905190815260200160405180910390a2600193505b5b5b505050919050565b60035433600160a060020a03908116911614610b8f57600080fd5b6003546002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b565b600254600090819081908190819033600160a060020a03908116911614610be757600080fd5b60035460a860020a900460ff16158015610c015750600454155b1515610c0c57600080fd5b600b548714610c1a57610cef565b600b805460010190556bffffffffffffffffffffffff9450600093508392505b8551831015610ce6576060868481518110610c5157fe5b906020019060200201519060020a9004915084868481518110610c7057fe5b90602001906020020151600160a060020a03841660008181526006602052604090819020805494909316938401909255958201959192507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b600190920191610c3a565b60078054850190555b5b5b50505050505050565b600254600160a060020a031681565b60015481565b60025433600160a060020a03908116911614610d2a57600080fd5b60035460a060020a900460ff161515610d4257600080fd5b60035460a860020a900460ff168015610d5b5750600454155b1515610d6657600080fd5b6004819055600554600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610dc457600080fd5b6102c65a03f11515610dd557600080fd5b5050506040518051600855505b5b5b5b50565b6000806000610df68461089b565b9150670de0b6b3a764000060075460085484890202811515610e1457fe5b04811515610e1e57fe5b04905084811115610e33578481039250610e38565b600092505b50509392505050565b60005481565b60025433600160a060020a03908116911614610e6257600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60045481565b60025460009081908190819033600160a060020a03908116911614610eb957600080fd5b6bffffffffffffffffffffffff9350600092505b8451831015610f26576060858481518110610ee457fe5b906020019060200201519060020a9004915083858481518110610f0357fe5b90602001906020020151169050610f1a82826110cf565b5b600190920191610ecd565b5b5b5050505050565b600a5460ff1615610f3f57600080fd5b61089733826110cf565b5b5b50565b60025433600160a060020a03908116911614610f6957600080fd5b60035460a060020a900460ff1615610f8057600080fd5b8015801590610f9157506003815b06155b1515610f9c57600080fd5b60008190556003815b046001555b5b5b50565b60075481565b60066020526000908152604090205481565b60035460a860020a900460ff1681565b670de0b6b3a764000081565b600354600160a060020a031681565b60025433600160a060020a0390811691161461100d57600080fd5b600a805460ff191660011790555b5b565b600061093c42611091565b90505b90565b60025433600160a060020a0390811691161461104a57600080fd5b6003805475ff000000000000000000000000000000000000000000191660a860020a1790555b5b565b600a5460ff1681565b600b5481565b600554600160a060020a031681565b6000808260045411156110a757600091506110c9565b600454601e9084035b0460010190506000548111156110c557506000545b8091505b50919050565b60035460a860020a900460ff161580156110e95750600454155b15156110f457600080fd5b600a5460ff161561110457600080fd5b600554600160a060020a03166323b872dd33308460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561117057600080fd5b6102c65a03f1151561118157600080fd5b50505060405180519050151561119657600080fd5b600160a060020a0382166000818152600660205260409081902080548401905560078054840190557fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b5b5b50505600a165627a7a723058204713b780d98b09d8a0381c50a91fb3498088d82e4a43a013ea2210cda88798ca0029"},"Savings.sol:Token":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","bin":""}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"};
