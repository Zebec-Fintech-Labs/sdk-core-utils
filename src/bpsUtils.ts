import { BigNumber } from "bignumber.js";

/**
 * Converts percentage value to bps
 * @param percent
 * @returns
 */
export function percentToBps(percent: string | number) {
	return BigNumber(percent).times(100).toFixed(0, BigNumber.ROUND_DOWN);
}

/**
 * Coverts bps value to percentage
 * @param bps
 * @returns
 */
export function bpsToPercent(bps: string | number | bigint) {
	return BigNumber(bps).div(100).toFixed(2, BigNumber.ROUND_DOWN);
}
