export type BufferLike = Buffer | ArrayBuffer | Uint8Array;

export function assertBufferSize(buffer: BufferLike, expectedSize: number): void {
	let actualSize: number;

	if (buffer instanceof ArrayBuffer) {
		actualSize = buffer.byteLength;
	} else if ("length" in buffer) {
		actualSize = buffer.length;
	} else {
		throw new Error("Unsupported buffer type");
	}

	if (actualSize !== expectedSize) {
		throw new Error(`Buffer size mismatch: expected ${expectedSize}, got ${actualSize}`);
	}
}
