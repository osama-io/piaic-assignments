"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise38() {
    function describe_city(city, country = "unknown") {
        console.log(`${city} is in ${country}`);
    }
    describe_city("Islamabad", "Pakistan");
    describe_city("Rio", "Brazil");
    describe_city("Lahore");
}
exports.default = exercise38;
