import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { OutPut } from 'src/common/dtos/output.dto';
import { Verification } from '../entities/verification.entity';

@ObjectType()
export class VerifyEmailOutput extends OutPut {}

@InputType()
export class VerifyEmailInput extends PickType(Verification, ['code']) {}
