function defangIPaddr(address: string): string {
	return address.replaceAll(".", "[.]");
}

// Time Complexity: O(n)
// Space Complexity: O(n)
