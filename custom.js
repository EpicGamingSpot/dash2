

document.addEventListener("alpine:init", () => {
    Alpine.data("collapse", () => ({
        collapse: false,

        collapseSidebar() {
            this.collapse = !this.collapse;
        },
    }));
    Alpine.data("dropdown", (initialOpenState = false) => ({
        open: initialOpenState,

        toggle() {
            this.open = !this.open;
        },
    }));
    Alpine.data("modals", (initialOpenState = false) => ({
        open: initialOpenState,

        toggle() {
            this.open = !this.open;
        },
    }));

    // main - custom functions
    Alpine.data("main", (value) => ({}));

    Alpine.store("app", {
        // sidebar
        sidebar: false,
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },

        // Light and dark Mode
        mode: Alpine.$persist("dark"),
        toggleMode(val) {
            if (!val) {
                val = this.mode || "dark"; // light And Dark
            }

            this.mode = val;
        },

        toggleFullScreen() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        },
    });
});
