process.on("exit", () => {
	require("fs").writeFileSync("display_runtime.txt", "0");
});

// Working as of Sept 2025
