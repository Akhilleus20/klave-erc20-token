import { JSON } from "@klave/sdk"

@json
export class CreateInput {
    name!: string;
    symbol!: string;
    decimals!: u8;
    totalSupply!: u64;
}

@json
export class TransferInput {
    to!: string;
    value!: u64;
}

@json
export class ApproveInput {
    spender!: string;
    value!: u64;
}

@json
export class TransferFromInput {
    from!: string;
    to!: string;
    value!: u64;
}

@json
export class AllowanceInput {
    owner!: string;
    spender!: string;
}

@json
export class IncreaseAllowanceInput {
    spender!: string;
    addedValue!: u64;
}

@json
export class DecreaseAllowanceInput {
    spender!: string;
    subtractedValue!: u64;
}

@json
export class MintInput {
    to!: string;
    value!: u64;
}

@json
export class BurnInput {
    from!: string;
    value!: u64;
}

@json
export class BurnFromInput {
    spender!: string;
    value!: u64;
}