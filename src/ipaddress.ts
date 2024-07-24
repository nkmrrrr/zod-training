import { z } from "zod";

const ip = z.string().ip();

// ip.parse("192.168.1.1"); // pass
// ip.parse("84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003"); // pass
// ip.parse("84d5:51a0:9114:1855:4cfa:f2d7:1f12:192.168.1.1"); // pass

// ip.parse("256.1.1.1"); // fail
// ip.parse("84d5:51a0:9114:gggg:4cfa:f2d7:1f12:7003"); // fail

const ipv4 = z.string().ip({ version: "v4" });
const ipv6 = z.string().ip({ version: "v6" });

ipv4.parse("84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003"); // fail
ipv6.parse("192.168.1.1"); // fail
