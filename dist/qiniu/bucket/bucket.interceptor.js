"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let BucketInterceptor = class BucketInterceptor {
    intercept(context, call$) {
        return call$.pipe(operators_1.map((data) => {
            return data.reduce((arr, item, index) => {
                arr.push({ name: item, id: index + 1 });
                return arr;
            }, []);
        }));
    }
};
BucketInterceptor = __decorate([
    common_1.Injectable()
], BucketInterceptor);
exports.BucketInterceptor = BucketInterceptor;
//# sourceMappingURL=bucket.interceptor.js.map