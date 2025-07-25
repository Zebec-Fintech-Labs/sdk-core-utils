export async function hashSHA256(input: string) {
	const utf8 = new TextEncoder().encode(input);
	const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, "0")).join("");

	return hashHex;
}

export async function hashSHA256ToBuffer(input: string) {
	const utf8 = new TextEncoder().encode(input);
	const hashArrayBuffer = await crypto.subtle.digest("SHA-256", utf8);
	const hashBuffer = Buffer.from(new Uint8Array(hashArrayBuffer));

	return hashBuffer;
}
