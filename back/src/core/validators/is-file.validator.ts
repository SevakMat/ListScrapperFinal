import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

import { IsFileOptions } from 'src/common/interfaces';



export function IsFile(options: IsFileOptions, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        return registerDecorator({
            name: 'isFile',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (value?.mimetype && (options?.mime ?? []).includes(value?.mimetype)) {
                        return true;
                    }                        
                    return false;
                },
            }
        });
    }
}