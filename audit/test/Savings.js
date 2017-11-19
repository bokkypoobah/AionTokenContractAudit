var savingsOutput={"contracts":{"Savings.sol:Savings":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"tok\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"availableForWithdrawalAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"total\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addrs\",\"type\":\"address[]\"}],\"name\":\"bulkWithdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"inited\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"intervalSecs\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isStarted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"refundTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"withdrawn\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalizeInit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"withdrawTo\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"nonce\",\"type\":\"uint256\"},{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"multiMint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"t0special\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startBlockTimestamp\",\"type\":\"uint256\"}],\"name\":\"start\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"remainder\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_deposit\",\"type\":\"uint256\"},{\"name\":\"_withdrawn\",\"type\":\"uint256\"},{\"name\":\"_blockTimestamp\",\"type\":\"uint256\"},{\"name\":\"_total\",\"type\":\"uint256\"}],\"name\":\"_withdrawTo\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"periods\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_periods\",\"type\":\"uint256\"},{\"name\":\"_t0special\",\"type\":\"uint256\"}],\"name\":\"init\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startBlockTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"bulkDepositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"updateTotal\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalfv\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"deposited\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"locked\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"precision\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"nullify\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"period\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"lock\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nullified\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintingNonce\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"periodAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"beneficiary\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"depositTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"who\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdraws\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"who\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"new_owner\",\"type\":\"address\"}],\"name\":\"ChangedOwner\",\"type\":\"event\"}]","bin":"606060405260006005555b60008054600160a060020a03191633600160a060020a03161790555b5b61136f806100366000396000f300606060405236156101c75763ffffffff60e060020a600035041663144fa6d781146101da57806328bf2448146101fb5780632ddbd13a146102235780632ed94f6c146102485780633ccfd60b1461029957806343c885ba146102c05780634cbf867d146102e7578063544736e61461030c578063549c6bbb146103335780636ef610921461035757806372a02f1d1461038857806372b0d90c1461039d57806379ba5097146103d057806388df13fa146103e55780638da5cb5b1461043b57806390e2b94b1461046a57806395805dad1461048f578063a0684251146104a7578063a3c9fc7d146104cc578063a4caeb42146104fd578063a5843f0814610522578063a6f9dae11461053d578063ac3dc9aa1461055e578063b11e388914610583578063b6b55f25146105d4578063c255fa40146105ec578063c3af702e14610601578063cb13cddb14610626578063cf30901214610657578063d3b5dc3b1461067e578063d4ee1d90146106a3578063ece20f36146106d2578063ef78d4fd146106e7578063f83d08ba1461070c578063f9df65eb14610721578063fbb0eb8b14610748578063fc0c546a1461076d578063fc207c8f1461079c578063ffaad6a5146107c4575b34156101d257600080fd5b5b600080fd5b005b34156101e557600080fd5b6101d8600160a060020a03600435166107e8565b005b341561020657600080fd5b610211600435610830565b60405190815260200160405180910390f35b341561022e57600080fd5b610211610862565b60405190815260200160405180910390f35b341561025357600080fd5b6101d8600460248135818101908301358060208181020160405190810160405280939291908181526020018383602002808284375094965061086895505050505050565b005b34156102a457600080fd5b6102ac6108b6565b604051901515815260200160405180910390f35b34156102cb57600080fd5b6102ac6108d9565b604051901515815260200160405180910390f35b34156102f257600080fd5b6102116108e2565b60405190815260200160405180910390f35b341561031757600080fd5b6102ac6108e7565b604051901515815260200160405180910390f35b341561033e57600080fd5b6101d8600160a060020a0360043516602435610908565b005b341561036257600080fd5b610211600160a060020a03600435166109c7565b60405190815260200160405180910390f35b341561039357600080fd5b6101d86109d9565b005b34156103a857600080fd5b6102ac600160a060020a0360043516610a16565b604051901515815260200160405180910390f35b34156103db57600080fd5b6101d8610bb2565b005b34156103f057600080fd5b6101d860048035906044602480359081019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610c3095505050505050565b005b341561044657600080fd5b61044e610d65565b604051600160a060020a03909116815260200160405180910390f35b341561047557600080fd5b610211610d74565b60405190815260200160405180910390f35b341561049a57600080fd5b6101d8600435610d7a565b005b34156104b257600080fd5b610211610e55565b60405190815260200160405180910390f35b34156104d757600080fd5b610211600435602435604435606435610e5b565b60405190815260200160405180910390f35b341561050857600080fd5b610211610eb3565b60405190815260200160405180910390f35b341561052d57600080fd5b6101d8600435602435610eb9565b005b341561054857600080fd5b6101d8600160a060020a0360043516610f01565b005b341561056957600080fd5b610211610f49565b60405190815260200160405180910390f35b341561058e57600080fd5b6101d86004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843750949650610f4f95505050505050565b005b34156105df57600080fd5b6101d8600435610fe7565b005b34156105f757600080fd5b6101d8611022565b005b341561060c57600080fd5b6102116110f8565b60405190815260200160405180910390f35b341561063157600080fd5b610211600160a060020a03600435166110fe565b60405190815260200160405180910390f35b341561066257600080fd5b6102ac611110565b604051901515815260200160405180910390f35b341561068957600080fd5b61021161111e565b60405190815260200160405180910390f35b34156106ae57600080fd5b61044e61112a565b604051600160a060020a03909116815260200160405180910390f35b34156106dd57600080fd5b6101d8611139565b005b34156106f257600080fd5b610211611165565b60405190815260200160405180910390f35b341561071757600080fd5b6101d8611176565b005b341561072c57600080fd5b6102ac6111a4565b604051901515815260200160405180910390f35b341561075357600080fd5b6102116111ad565b60405190815260200160405180910390f35b341561077857600080fd5b61044e6111b3565b604051600160a060020a03909116815260200160405180910390f35b34156107a757600080fd5b6102116004356111c2565b60405190815260200160405180910390f35b34156107cf57600080fd5b6101d8600160a060020a0360043516602435611200565b005b60005433600160a060020a0390811691161461080357600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600060025460035401670de0b6b3a764000061084b846111c2565b600354010281151561085957fe5b0490505b919050565b600a5481565b600c5460009060ff161561087b57600080fd5b5060005b81518110156108b0576108a682828151811061089757fe5b90602001906020020151610a16565b505b60010161087f565b5b5b5050565b600c5460009060ff16156108c957600080fd5b6108d233610a16565b90505b5b90565b60045460ff1681565b601e81565b600454600090610100900460ff1680156108d2575060055415155b90505b90565b60005433600160a060020a0390811691161461092357600080fd5b600454610100900460ff1615801561093b5750600554155b151561094657600080fd5b600654600160a060020a031663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156109a557600080fd5b6102c65a03f115156109b657600080fd5b505050604051805150505b5b5b5050565b600b6020526000908152604090205481565b60005433600160a060020a039081169116146109f457600080fd5b60045460ff1615610a0457600080fd5b6004805460ff191660011790555b5b5b565b600080600080600460019054906101000a900460ff168015610a39575060055415155b1515610a4457600080fd5b600c5460ff1615610a5457600080fd5b600160a060020a038516600090815260076020908152604080832054600b90925290912054600a549194509250610a9090849084904290610e5b565b9050801515610aa25760009350610ba8565b600854600a548402811515610ab357fe5b048183011115610ac257600080fd5b600654600160a060020a031663a9059cbb868360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610b2157600080fd5b6102c65a03f11515610b3257600080fd5b505050604051805190501515610b4757600080fd5b600160a060020a0385166000818152600b6020526040908190208054840190556009805484900390557ff2f18af2e726e5e26f2cd45a44f8614032a8c7909601c09dc1f40e7c731ec06b9083905190815260200160405180910390a2600193505b5b5b505050919050565b60015433600160a060020a0390811691161415610a12576001805460008054600160a060020a0380841673ffffffffffffffffffffffffffffffffffffffff1992831617928390559216909255167fa701229f4b9ddf00aa1c7228d248e6320ee7c581d856ddfba036e73947cd0d1360405160405180910390a25b5b565b60008054819081908190819033600160a060020a03908116911614610c5457600080fd5b600454610100900460ff16158015610c6c5750600554155b1515610c7757600080fd5b600d548714610c8557610d5a565b600d805460010190556bffffffffffffffffffffffff9450600093508392505b8551831015610d51576060868481518110610cbc57fe5b906020019060200201519060020a9004915084868481518110610cdb57fe5b90602001906020020151600160a060020a03841660008181526007602052604090819020805494909316938401909255958201959192507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b600190920191610ca5565b60088054850190555b5b5b50505050505050565b600054600160a060020a031681565b60035481565b6000805433600160a060020a03908116911614610d9657600080fd5b60045460ff161515610da757600080fd5b600454610100900460ff168015610dbe5750600554155b1515610dc957600080fd5b6005829055600654600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b1515610e2757600080fd5b6102c65a03f11515610e3857600080fd5b5050506040518051600a81905560098190559150505b5b5b5b5050565b60095481565b6000806000610e6985610830565b9150670de0b6b3a764000060085485848a0202811515610e8557fe5b04811515610e8f57fe5b04905085811115610ea4578581039250610ea9565b600092505b5050949350505050565b60025481565b60005433600160a060020a03908116911614610ed457600080fd5b60045460ff1615610ee457600080fd5b811515610ef057600080fd5b600282905560038190555b5b5b5050565b60005433600160a060020a03908116911614610f1c57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60055481565b6000805481908190819033600160a060020a03908116911614610f7157600080fd5b6bffffffffffffffffffffffff9350600092505b8451831015610fde576060858481518110610f9c57fe5b906020019060200201519060020a9004915083858481518110610fbb57fe5b90602001906020020151169050610fd28282611200565b5b600190920191610f85565b5b5b5050505050565b60005433600160a060020a0390811691161461100257600080fd5b600c5460ff161561101257600080fd5b61082c3382611200565b5b5b5b50565b60008054819033600160a060020a0390811691161461104057600080fd5b600454610100900460ff16151561105657600080fd5b600654600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156110af57600080fd5b6102c65a03f115156110c057600080fd5b505050604051805160095490935083101590506110dc57600080fd5b5060098054600a80549184039182019055908290555b5b5b5050565b60085481565b60076020526000908152604090205481565b600454610100900460ff1681565b670de0b6b3a764000081565b600154600160a060020a031681565b60005433600160a060020a0390811691161461115457600080fd5b600c805460ff191660011790555b5b565b60006108d2426111c2565b90505b90565b60005433600160a060020a0390811691161461119157600080fd5b6004805461ff0019166101001790555b5b565b600c5460ff1681565b600d5481565b600654600160a060020a031681565b6000808260055411156111d857600091506111fa565b600554601e9084035b0460010190506002548111156111f657506002545b8091505b50919050565b60005433600160a060020a0390811691161461121b57600080fd5b600454610100900460ff161580156112335750600554155b151561123e57600080fd5b600c5460ff161561124e57600080fd5b600654600160a060020a03166323b872dd33308460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156112ba57600080fd5b6102c65a03f115156112cb57600080fd5b5050506040518051905015156112e057600080fd5b600160a060020a0382166000818152600760205260409081902080548401905560088054840190557fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9083905190815260200160405180910390a25b5b5b5b50505600a165627a7a723058207c773d85563c250e69ed3600102960f199da8ac9f998e8a6a5084e756d0bd7a00029"},"Savings.sol:Token":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","bin":""},"StandardOwned.sol:IOwned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]","bin":""},"StandardOwned.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"new_owner\",\"type\":\"address\"}],\"name\":\"ChangedOwner\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6102028061003c6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba5097811461005e5780638da5cb5b14610073578063a6f9dae1146100a2578063d4ee1d90146100c3575b600080fd5b341561006957600080fd5b6100716100f2565b005b341561007e57600080fd5b610086610170565b604051600160a060020a03909116815260200160405180910390f35b34156100ad57600080fd5b610071600160a060020a036004351661017f565b005b34156100ce57600080fd5b6100866101c7565b604051600160a060020a03909116815260200160405180910390f35b60015433600160a060020a039081169116141561016d576001805460008054600160a060020a0380841673ffffffffffffffffffffffffffffffffffffffff1992831617928390559216909255167fa701229f4b9ddf00aa1c7228d248e6320ee7c581d856ddfba036e73947cd0d1360405160405180910390a25b5b565b600054600160a060020a031681565b60005433600160a060020a0390811691161461019a57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600154600160a060020a0316815600a165627a7a72305820fee3888bb5c668d9986fb77ae5e6549a0f6b497325ce1aced1bbef30503fdd850029"}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"};
