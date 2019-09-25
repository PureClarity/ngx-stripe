/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, from } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { isSourceData } from '../interfaces/sources';
import { isAccount, isAccountData, isBankAccount, isBankAccountData, isPii, isPiiData } from '../interfaces/token';
import { isHandleCardPaymentOptions, isPaymentMethodData } from '../interfaces/payment-intent';
var StripeInstance = /** @class */ (function () {
    function StripeInstance(loader, window, key, options) {
        var _this = this;
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new BehaviorSubject(undefined);
        this.loader
            .asStream()
            .pipe(filter(function (status) { return status.loaded === true; }), first(), map(function () { return ((/** @type {?} */ (_this.window.getNativeWindow()))).Stripe; }))
            .subscribe(function (Stripe) {
            /** @type {?} */
            var stripe = _this.options
                ? ((/** @type {?} */ (Stripe(_this.key, _this.options))))
                : ((/** @type {?} */ (Stripe(_this.key))));
            _this.stripe$.next(stripe);
        });
    }
    /**
     * @return {?}
     */
    StripeInstance.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.stripe$.getValue();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    StripeInstance.prototype.elements = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), map(function (stripe) { return ((/** @type {?} */ (stripe))).elements(options); }), first());
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StripeInstance.prototype.createToken = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isAccount(a) && isAccountData(b)) {
                return from(stripe.createToken(a, b));
            }
            else if (isBankAccount(a) && isBankAccountData(b)) {
                return from(stripe.createToken(a, b));
            }
            else if (isPii(a) && isPiiData(b)) {
                return from(stripe.createToken(a, b));
            }
            else {
                return from(stripe.createToken((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
        }), first());
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeInstance.prototype.createSource = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isSourceData(a)) {
                return from(stripe.createSource((/** @type {?} */ (a))));
            }
            return from(stripe.createSource((/** @type {?} */ (a)), b));
        }), first());
    };
    /**
     * @param {?} source
     * @return {?}
     */
    StripeInstance.prototype.retrieveSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.retrieveSource(source));
        }), first());
    };
    /**
     * @param {?} options
     * @return {?}
     */
    StripeInstance.prototype.paymentRequest = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var stripe = this.getInstance();
        if (stripe) {
            return stripe.paymentRequest(options);
        }
        return undefined;
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.handleCardPayment = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isHandleCardPaymentOptions(c)) {
                return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b)), (/** @type {?} */ (c))));
            }
            else if (isHandleCardPaymentOptions(b)) {
                return from(stripe.handleCardPayment((/** @type {?} */ (a)), (/** @type {?} */ (b))));
            }
            return from(stripe.handleCardPayment((/** @type {?} */ (a))));
        }));
    };
    /**
     * @param {?} a
     * @return {?}
     */
    StripeInstance.prototype.handleCardAction = /**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.handleCardAction((/** @type {?} */ (a))));
        }));
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    StripeInstance.prototype.confirmPaymentIntent = /**
     * @param {?} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.confirmPaymentIntent((/** @type {?} */ (a)), (/** @type {?} */ (b))));
        }));
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.createPaymentMethod = /**
     * @param {?} a
     * @param {?} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            return from(stripe.createPaymentMethod(a, b, c));
        }), first());
    };
    /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    StripeInstance.prototype.handleCardSetup = /**
     * @param {?} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function (a, b, c) {
        return this.stripe$.asObservable().pipe(filter(function (stripe) { return Boolean(stripe); }), switchMap(function (s) {
            /** @type {?} */
            var stripe = (/** @type {?} */ (s));
            if (isPaymentMethodData(c)) {
                return from(stripe.handleCardSetup(a, (/** @type {?} */ (b)), (/** @type {?} */ (c))));
            }
            return from(stripe.handleCardSetup(a, (/** @type {?} */ (b))));
        }));
    };
    return StripeInstance;
}());
export { StripeInstance };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StripeInstance.prototype.stripe$;
    /** @type {?} */
    StripeInstance.prototype.loader;
    /** @type {?} */
    StripeInstance.prototype.window;
    /** @type {?} */
    StripeInstance.prototype.key;
    /** @type {?} */
    StripeInstance.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLWluc3RhbmNlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmlwZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdHJpcGUtaW5zdGFuY2UuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEvRCxPQUFPLEVBR0wsWUFBWSxFQUViLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQVNMLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0scUJBQXFCLENBQUM7QUFHN0IsT0FBTyxFQU1MLDBCQUEwQixFQUMxQixtQkFBbUIsRUFDcEIsTUFBTSw4QkFBOEIsQ0FBQztBQUd0QztJQUtFLHdCQUNTLE1BQTJCLEVBQzNCLE1BQWlCLEVBQ2pCLEdBQVcsRUFDWCxPQUFpQjtRQUoxQixpQkFvQkM7UUFuQlEsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQVJsQixZQUFPLEdBQTBDLElBQUksZUFBZSxDQUUxRSxTQUFTLENBQUMsQ0FBQztRQVFYLElBQUksQ0FBQyxNQUFNO2FBQ1IsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUF0QixDQUFzQixDQUFDLEVBQ2xELEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFPLENBQUMsQ0FBQyxNQUFNLEVBQTdDLENBQTZDLENBQUMsQ0FDekQ7YUFDQSxTQUFTLENBQUMsVUFBQyxNQUFXOztnQkFDZixNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU87Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBWSxDQUFDO2dCQUM5QyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFZLENBQUM7WUFFbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRU0sb0NBQVc7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLGlDQUFROzs7O0lBQWYsVUFBZ0IsT0FBeUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxFQUNqQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLG1CQUFBLE1BQU0sRUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLEVBQ3JELEtBQUssRUFBRSxDQUNSLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSxvQ0FBVzs7Ozs7SUFBbEIsVUFDRSxDQUF3QyxFQUN4QyxDQUF3RTtRQUV4RSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxVQUFBLENBQUM7O2dCQUNILE1BQU0sR0FBRyxtQkFBQSxDQUFDLEVBQVk7WUFFNUIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FDVCxNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFBLENBQUMsRUFBVyxFQUFFLG1CQUFBLENBQUMsRUFBK0IsQ0FBQyxDQUNuRSxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU0scUNBQVk7Ozs7O0lBQW5CLFVBQ0UsQ0FBdUIsRUFDdkIsQ0FBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsVUFBQSxDQUFDOztnQkFDSCxNQUFNLEdBQUcsbUJBQUEsQ0FBQyxFQUFZO1lBRTVCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFBLENBQUMsRUFBYyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQUEsQ0FBQyxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSx1Q0FBYzs7OztJQUFyQixVQUFzQixNQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxVQUFBLENBQUM7O2dCQUNILE1BQU0sR0FBRyxtQkFBQSxDQUFDLEVBQVk7WUFFNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxFQUNGLEtBQUssRUFBRSxDQUNSLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLHVDQUFjOzs7O0lBQXJCLFVBQXNCLE9BQThCOztZQUM1QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNqQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7SUFFTSwwQ0FBaUI7Ozs7OztJQUF4QixVQUNFLENBQVMsRUFDVCxDQUFrRCxFQUNsRCxDQUF3QztRQUV4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxVQUFBLENBQUM7O2dCQUNILE1BQU0sR0FBRyxtQkFBQSxDQUFDLEVBQVk7WUFFNUIsSUFBSSwwQkFBMEIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQ1QsTUFBTSxDQUFDLGlCQUFpQixDQUN0QixtQkFBQSxDQUFDLEVBQVUsRUFDWCxtQkFBQSxDQUFDLEVBQVcsRUFDWixtQkFBQSxDQUFDLEVBQXdDLENBQzFDLENBQ0YsQ0FBQzthQUNIO2lCQUFNLElBQUksMEJBQTBCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sSUFBSSxDQUNULE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsbUJBQUEsQ0FBQyxFQUFVLEVBQ1gsbUJBQUEsQ0FBQyxFQUE0QixDQUM1QixDQUNKLENBQUM7YUFDSDtZQUVELE9BQU8sSUFBSSxDQUNULE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsbUJBQUEsQ0FBQyxFQUFVLENBQ1osQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0seUNBQWdCOzs7O0lBQXZCLFVBQXdCLENBQVM7UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsVUFBQSxDQUFDOztnQkFDSCxNQUFNLEdBQUcsbUJBQUEsQ0FBQyxFQUFZO1lBRTVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBQSxDQUFDLEVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLDZDQUFvQjs7Ozs7SUFBM0IsVUFDRSxDQUFTLEVBQ1QsQ0FBK0I7UUFFL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsVUFBQSxDQUFDOztnQkFDSCxNQUFNLEdBQUcsbUJBQUEsQ0FBQyxFQUFZO1lBRTVCLE9BQU8sSUFBSSxDQUNULE1BQU0sQ0FBQyxvQkFBb0IsQ0FDekIsbUJBQUEsQ0FBQyxFQUFVLEVBQ1gsbUJBQUEsQ0FBQyxFQUEyQyxDQUM3QyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLDRDQUFtQjs7Ozs7O0lBQTFCLFVBQ0UsQ0FBUyxFQUNULENBQVUsRUFDVixDQUFpQztRQUVqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNyQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxVQUFBLENBQUM7O2dCQUNILE1BQU0sR0FBRyxtQkFBQSxDQUFDLEVBQVk7WUFFNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLHdDQUFlOzs7Ozs7SUFBdEIsVUFDRSxDQUFTLEVBQ1QsQ0FBd0MsRUFDeEMsQ0FBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsVUFBQSxDQUFDOztnQkFDSCxNQUFNLEdBQUcsbUJBQUEsQ0FBQyxFQUFZO1lBRTVCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUNULE1BQU0sQ0FBQyxlQUFlLENBQ3BCLENBQUMsRUFDRCxtQkFBQSxDQUFDLEVBQVcsRUFDWixtQkFBQSxDQUFDLEVBQWlDLENBQ25DLENBQ0YsQ0FBQzthQUNIO1lBRUQsT0FBTyxJQUFJLENBQ1QsTUFBTSxDQUFDLGVBQWUsQ0FDcEIsQ0FBQyxFQUNELG1CQUFBLENBQUMsRUFBMEMsQ0FDNUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyTkQsSUFxTkM7Ozs7Ozs7SUFwTkMsaUNBRWE7O0lBR1gsZ0NBQWtDOztJQUNsQyxnQ0FBd0I7O0lBQ3hCLDZCQUFrQjs7SUFDbEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi93aW5kb3ctcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF6eVN0cmlwZUFQSUxvYWRlciwgU3RhdHVzIH0gZnJvbSAnLi9hcGktbG9hZGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTdHJpcGVKUywgT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RyaXBlJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2VsZW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMsIEVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZWxlbWVudHMnO1xuaW1wb3J0IHtcbiAgU291cmNlRGF0YSxcbiAgU291cmNlUmVzdWx0LFxuICBpc1NvdXJjZURhdGEsXG4gIFNvdXJjZVBhcmFtc1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL3NvdXJjZXMnO1xuaW1wb3J0IHtcbiAgQ2FyZERhdGFPcHRpb25zLFxuICBUb2tlblJlc3VsdCxcbiAgQWNjb3VudCxcbiAgQWNjb3VudERhdGEsXG4gIEJhbmtBY2NvdW50LFxuICBCYW5rQWNjb3VudERhdGEsXG4gIFBpaURhdGEsXG4gIFBpaSxcbiAgaXNBY2NvdW50LFxuICBpc0FjY291bnREYXRhLFxuICBpc0JhbmtBY2NvdW50LFxuICBpc0JhbmtBY2NvdW50RGF0YSxcbiAgaXNQaWksXG4gIGlzUGlpRGF0YVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Rva2VuJztcbmltcG9ydCB7IFN0cmlwZVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuL3N0cmlwZS1pbnN0YW5jZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGF5bWVudFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wYXltZW50LXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zLFxuICBQYXltZW50SW50ZW50UmVzdWx0LFxuICBDb25maXJtUGF5bWVudEludGVudE9wdGlvbnMsXG4gIFBheW1lbnRNZXRob2REYXRhLFxuICBQYXltZW50TWV0aG9kUmVzdWx0LFxuICBpc0hhbmRsZUNhcmRQYXltZW50T3B0aW9ucyxcbiAgaXNQYXltZW50TWV0aG9kRGF0YVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheW1lbnQtaW50ZW50JztcbmltcG9ydCB7IENhcmRTZXR1cFJlc3VsdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2FyZC1zZXR1cCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpcGVJbnN0YW5jZSBpbXBsZW1lbnRzIFN0cmlwZVNlcnZpY2VJbnRlcmZhY2Uge1xuICBwcml2YXRlIHN0cmlwZSQ6IEJlaGF2aW9yU3ViamVjdDxTdHJpcGVKUyB8IHVuZGVmaW5lZD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIFN0cmlwZUpTIHwgdW5kZWZpbmVkXG4gID4odW5kZWZpbmVkKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbG9hZGVyOiBMYXp5U3RyaXBlQVBJTG9hZGVyLFxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd1JlZixcbiAgICBwdWJsaWMga2V5OiBzdHJpbmcsXG4gICAgcHVibGljIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge1xuICAgIHRoaXMubG9hZGVyXG4gICAgICAuYXNTdHJlYW0oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoc3RhdHVzOiBTdGF0dXMpID0+IHN0YXR1cy5sb2FkZWQgPT09IHRydWUpLFxuICAgICAgICBmaXJzdCgpLFxuICAgICAgICBtYXAoKCkgPT4gKHRoaXMud2luZG93LmdldE5hdGl2ZVdpbmRvdygpIGFzIGFueSkuU3RyaXBlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoU3RyaXBlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gdGhpcy5vcHRpb25zXG4gICAgICAgICAgPyAoU3RyaXBlKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpIGFzIFN0cmlwZUpTKVxuICAgICAgICAgIDogKFN0cmlwZSh0aGlzLmtleSkgYXMgU3RyaXBlSlMpO1xuXG4gICAgICAgIHRoaXMuc3RyaXBlJC5uZXh0KHN0cmlwZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnN0YW5jZSgpOiBTdHJpcGVKUyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgcHVibGljIGVsZW1lbnRzKG9wdGlvbnM/OiBFbGVtZW50c09wdGlvbnMpOiBPYnNlcnZhYmxlPEVsZW1lbnRzPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmlsdGVyKHN0cmlwZSA9PiBCb29sZWFuKHN0cmlwZSkpLFxuICAgICAgbWFwKHN0cmlwZSA9PiAoc3RyaXBlIGFzIFN0cmlwZUpTKS5lbGVtZW50cyhvcHRpb25zKSksXG4gICAgICBmaXJzdCgpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUb2tlbihcbiAgICBhOiBFbGVtZW50IHwgQWNjb3VudCB8IEJhbmtBY2NvdW50IHwgUGlpLFxuICAgIGI6IENhcmREYXRhT3B0aW9ucyB8IEFjY291bnREYXRhIHwgQmFua0FjY291bnREYXRhIHwgUGlpRGF0YSB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFRva2VuUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmlsdGVyKHN0cmlwZSA9PiBCb29sZWFuKHN0cmlwZSkpLFxuICAgICAgc3dpdGNoTWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBzdHJpcGUgPSBzIGFzIFN0cmlwZUpTO1xuXG4gICAgICAgIGlmIChpc0FjY291bnQoYSkgJiYgaXNBY2NvdW50RGF0YShiKSkge1xuICAgICAgICAgIHJldHVybiBmcm9tKHN0cmlwZS5jcmVhdGVUb2tlbihhLCBiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNCYW5rQWNjb3VudChhKSAmJiBpc0JhbmtBY2NvdW50RGF0YShiKSkge1xuICAgICAgICAgIHJldHVybiBmcm9tKHN0cmlwZS5jcmVhdGVUb2tlbihhLCBiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQaWkoYSkgJiYgaXNQaWlEYXRhKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb20oc3RyaXBlLmNyZWF0ZVRva2VuKGEsIGIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICAgIHN0cmlwZS5jcmVhdGVUb2tlbihhIGFzIEVsZW1lbnQsIGIgYXMgQ2FyZERhdGFPcHRpb25zIHwgdW5kZWZpbmVkKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlyc3QoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlU291cmNlKFxuICAgIGE6IEVsZW1lbnQgfCBTb3VyY2VEYXRhLFxuICAgIGI/OiBTb3VyY2VEYXRhIHwgdW5kZWZpbmVkXG4gICk6IE9ic2VydmFibGU8U291cmNlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmlsdGVyKHN0cmlwZSA9PiBCb29sZWFuKHN0cmlwZSkpLFxuICAgICAgc3dpdGNoTWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBzdHJpcGUgPSBzIGFzIFN0cmlwZUpTO1xuXG4gICAgICAgIGlmIChpc1NvdXJjZURhdGEoYSkpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuY3JlYXRlU291cmNlKGEgYXMgU291cmNlRGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tKHN0cmlwZS5jcmVhdGVTb3VyY2UoYSBhcyBFbGVtZW50LCBiKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJldHJpZXZlU291cmNlKHNvdXJjZTogU291cmNlUGFyYW1zKTogT2JzZXJ2YWJsZTxTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgcmV0dXJuIGZyb20oc3RyaXBlLnJldHJpZXZlU291cmNlKHNvdXJjZSkpO1xuICAgICAgfSksXG4gICAgICBmaXJzdCgpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXltZW50UmVxdWVzdChvcHRpb25zOiBQYXltZW50UmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHJpcGUgPSB0aGlzLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHN0cmlwZSkge1xuICAgICAgcmV0dXJuIHN0cmlwZS5wYXltZW50UmVxdWVzdChvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYXJkUGF5bWVudChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IEVsZW1lbnQgfCBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnMgfCB1bmRlZmluZWQsXG4gICAgYz86IEhhbmRsZUNhcmRQYXltZW50T3B0aW9ucyB8IHVuZGVmaW5lZFxuICApOiBPYnNlcnZhYmxlPFBheW1lbnRJbnRlbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgaWYgKGlzSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zKGMpKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb20oXG4gICAgICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFBheW1lbnQoXG4gICAgICAgICAgICAgIGEgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICBiIGFzIEVsZW1lbnQsXG4gICAgICAgICAgICAgIGMgYXMgSGFuZGxlQ2FyZFBheW1lbnRPcHRpb25zIHwgdW5kZWZpbmVkXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZUNhcmRQYXltZW50T3B0aW9ucyhiKSkge1xuICAgICAgICAgIHJldHVybiBmcm9tKFxuICAgICAgICAgICAgc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KFxuICAgICAgICAgICAgICBhIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgYiBhcyBIYW5kbGVDYXJkUGF5bWVudE9wdGlvbnNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFBheW1lbnQoXG4gICAgICAgICAgICBhIGFzIHN0cmluZ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYXJkQWN0aW9uKGE6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudEludGVudFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuaGFuZGxlQ2FyZEFjdGlvbihhIGFzIHN0cmluZykpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNvbmZpcm1QYXltZW50SW50ZW50KFxuICAgIGE6IHN0cmluZyxcbiAgICBiPzogQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zXG4gICk6IE9ic2VydmFibGU8UGF5bWVudEludGVudFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICBzdHJpcGUuY29uZmlybVBheW1lbnRJbnRlbnQoXG4gICAgICAgICAgICBhIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGIgYXMgQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zIHwgdW5kZWZpbmVkXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVBheW1lbnRNZXRob2QoXG4gICAgYTogc3RyaW5nLFxuICAgIGI6IEVsZW1lbnQsXG4gICAgYz86IFBheW1lbnRNZXRob2REYXRhIHwgdW5kZWZpbmVkXG4gICk6IE9ic2VydmFibGU8UGF5bWVudE1ldGhvZFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZSQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihzdHJpcGUgPT4gQm9vbGVhbihzdHJpcGUpKSxcbiAgICAgIHN3aXRjaE1hcChzID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBlID0gcyBhcyBTdHJpcGVKUztcblxuICAgICAgICByZXR1cm4gZnJvbShzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZChhLCBiLCBjKSk7XG4gICAgICB9KSxcbiAgICAgIGZpcnN0KClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhcmRTZXR1cChcbiAgICBhOiBzdHJpbmcsXG4gICAgYj86IEVsZW1lbnQgfCBzdHJpbmcgfCBQYXltZW50TWV0aG9kRGF0YSxcbiAgICBjPzogUGF5bWVudE1ldGhvZERhdGFcbiAgKTogT2JzZXJ2YWJsZTxDYXJkU2V0dXBSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoc3RyaXBlID0+IEJvb2xlYW4oc3RyaXBlKSksXG4gICAgICBzd2l0Y2hNYXAocyA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IHMgYXMgU3RyaXBlSlM7XG5cbiAgICAgICAgaWYgKGlzUGF5bWVudE1ldGhvZERhdGEoYykpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICAgIHN0cmlwZS5oYW5kbGVDYXJkU2V0dXAoXG4gICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgIGIgYXMgRWxlbWVudCxcbiAgICAgICAgICAgICAgYyBhcyBQYXltZW50TWV0aG9kRGF0YSB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFNldHVwKFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGIgYXMgc3RyaW5nIHwgUGF5bWVudE1ldGhvZERhdGEgfCB1bmRlZmluZWRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==