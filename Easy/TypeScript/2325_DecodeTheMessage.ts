function decodeMessage(key: string, message: string): string {
    const keyArr = [...new Set(key.replace(/\s+/g, ""))];

    let str = "";

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            str += " ";
        } else {
            str += String.fromCharCode(97 + keyArr.indexOf(message[i]));
        }
    }

    return str;
};

// Time Complexity: O(n · k) where n is the length of message and k is the number of unique characters in key.
// Space Complexity: O(k)