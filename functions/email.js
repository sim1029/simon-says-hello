!(function (t, e) {
	for (var r in e) t[r] = e[r];
})(
	exports,
	(function (t) {
		var e = {};
		function r(s) {
			if (e[s]) return e[s].exports;
			var n = (e[s] = { i: s, l: !1, exports: {} });
			return t[s].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
		}
		return (
			(r.m = t),
			(r.c = e),
			(r.d = function (t, e, s) {
				r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
			}),
			(r.r = function (t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(r.t = function (t, e) {
				if ((1 & e && (t = r(t)), 8 & e)) return t;
				if (4 & e && "object" == typeof t && t && t.__esModule) return t;
				var s = Object.create(null);
				if (
					(r.r(s),
					Object.defineProperty(s, "default", { enumerable: !0, value: t }),
					2 & e && "string" != typeof t)
				)
					for (var n in t)
						r.d(
							s,
							n,
							function (e) {
								return t[e];
							}.bind(null, n),
						);
				return s;
			}),
			(r.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return r.d(e, "a", e), e;
			}),
			(r.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(r.p = ""),
			r((r.s = 30))
		);
	})([
		function (t, e, r) {
			"use strict";
			var s = r(15),
				n = Object.prototype.toString;
			function o(t) {
				return Array.isArray(t);
			}
			function i(t) {
				return void 0 === t;
			}
			function a(t) {
				return "[object ArrayBuffer]" === n.call(t);
			}
			function c(t) {
				return null !== t && "object" == typeof t;
			}
			function u(t) {
				if ("[object Object]" !== n.call(t)) return !1;
				var e = Object.getPrototypeOf(t);
				return null === e || e === Object.prototype;
			}
			function h(t) {
				return "[object Function]" === n.call(t);
			}
			function f(t, e) {
				if (null != t)
					if (("object" != typeof t && (t = [t]), o(t)))
						for (var r = 0, s = t.length; r < s; r++) e.call(null, t[r], r, t);
					else
						for (var n in t)
							Object.prototype.hasOwnProperty.call(t, n) &&
								e.call(null, t[n], n, t);
			}
			t.exports = {
				isArray: o,
				isArrayBuffer: a,
				isBuffer: function (t) {
					return (
						null !== t &&
						!i(t) &&
						null !== t.constructor &&
						!i(t.constructor) &&
						"function" == typeof t.constructor.isBuffer &&
						t.constructor.isBuffer(t)
					);
				},
				isFormData: function (t) {
					return "[object FormData]" === n.call(t);
				},
				isArrayBufferView: function (t) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
						? ArrayBuffer.isView(t)
						: t && t.buffer && a(t.buffer);
				},
				isString: function (t) {
					return "string" == typeof t;
				},
				isNumber: function (t) {
					return "number" == typeof t;
				},
				isObject: c,
				isPlainObject: u,
				isUndefined: i,
				isDate: function (t) {
					return "[object Date]" === n.call(t);
				},
				isFile: function (t) {
					return "[object File]" === n.call(t);
				},
				isBlob: function (t) {
					return "[object Blob]" === n.call(t);
				},
				isFunction: h,
				isStream: function (t) {
					return c(t) && h(t.pipe);
				},
				isURLSearchParams: function (t) {
					return "[object URLSearchParams]" === n.call(t);
				},
				isStandardBrowserEnv: function () {
					return (
						("undefined" == typeof navigator ||
							("ReactNative" !== navigator.product &&
								"NativeScript" !== navigator.product &&
								"NS" !== navigator.product)) &&
						"undefined" != typeof window &&
						"undefined" != typeof document
					);
				},
				forEach: f,
				merge: function t() {
					var e = {};
					function r(r, s) {
						u(e[s]) && u(r)
							? (e[s] = t(e[s], r))
							: u(r)
							? (e[s] = t({}, r))
							: o(r)
							? (e[s] = r.slice())
							: (e[s] = r);
					}
					for (var s = 0, n = arguments.length; s < n; s++) f(arguments[s], r);
					return e;
				},
				extend: function (t, e, r) {
					return (
						f(e, function (e, n) {
							t[n] = r && "function" == typeof e ? s(e, r) : e;
						}),
						t
					);
				},
				trim: function (t) {
					return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
				},
				stripBOM: function (t) {
					return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
				},
			};
		},
		function (t, e, r) {
			"use strict";
			function s(t) {
				this.message = t;
			}
			(s.prototype.toString = function () {
				return "Cancel" + (this.message ? ": " + this.message : "");
			}),
				(s.prototype.__CANCEL__ = !0),
				(t.exports = s);
		},
		function (t, e, r) {
			"use strict";
			const s = r(11),
				n = r(69);
			t.exports = function (t, e) {
				return s(t, n, e);
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				return JSON.parse(JSON.stringify(t));
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(11),
				n = r(70);
			t.exports = function (t, e) {
				return s(t, n, e);
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			function n(t) {
				return encodeURIComponent(t)
					.replace(/%3A/gi, ":")
					.replace(/%24/g, "$")
					.replace(/%2C/gi, ",")
					.replace(/%20/g, "+")
					.replace(/%5B/gi, "[")
					.replace(/%5D/gi, "]");
			}
			t.exports = function (t, e, r) {
				if (!e) return t;
				var o;
				if (r) o = r(e);
				else if (s.isURLSearchParams(e)) o = e.toString();
				else {
					var i = [];
					s.forEach(e, function (t, e) {
						null != t &&
							(s.isArray(t) ? (e += "[]") : (t = [t]),
							s.forEach(t, function (t) {
								s.isDate(t)
									? (t = t.toISOString())
									: s.isObject(t) && (t = JSON.stringify(t)),
									i.push(n(e) + "=" + n(t));
							}));
					}),
						(o = i.join("&"));
				}
				if (o) {
					var a = t.indexOf("#");
					-1 !== a && (t = t.slice(0, a)),
						(t += (-1 === t.indexOf("?") ? "?" : "&") + o);
				}
				return t;
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(41),
				o = r(7),
				i = r(8),
				a = { "Content-Type": "application/x-www-form-urlencoded" };
			function c(t, e) {
				!s.isUndefined(t) &&
					s.isUndefined(t["Content-Type"]) &&
					(t["Content-Type"] = e);
			}
			var u,
				h = {
					transitional: i,
					adapter:
						("undefined" != typeof XMLHttpRequest
							? (u = r(42))
							: "undefined" != typeof process &&
							  "[object process]" ===
									Object.prototype.toString.call(process) &&
							  (u = r(48)),
						u),
					transformRequest: [
						function (t, e) {
							return (
								n(e, "Accept"),
								n(e, "Content-Type"),
								s.isFormData(t) ||
								s.isArrayBuffer(t) ||
								s.isBuffer(t) ||
								s.isStream(t) ||
								s.isFile(t) ||
								s.isBlob(t)
									? t
									: s.isArrayBufferView(t)
									? t.buffer
									: s.isURLSearchParams(t)
									? (c(e, "application/x-www-form-urlencoded;charset=utf-8"),
									  t.toString())
									: s.isObject(t) ||
									  (e && "application/json" === e["Content-Type"])
									? (c(e, "application/json"),
									  (function (t, e, r) {
											if (s.isString(t))
												try {
													return (e || JSON.parse)(t), s.trim(t);
												} catch (t) {
													if ("SyntaxError" !== t.name) throw t;
												}
											return (r || JSON.stringify)(t);
									  })(t))
									: t
							);
						},
					],
					transformResponse: [
						function (t) {
							var e = this.transitional || h.transitional,
								r = e && e.silentJSONParsing,
								n = e && e.forcedJSONParsing,
								i = !r && "json" === this.responseType;
							if (i || (n && s.isString(t) && t.length))
								try {
									return JSON.parse(t);
								} catch (t) {
									if (i) {
										if ("SyntaxError" === t.name)
											throw o(t, this, "E_JSON_PARSE");
										throw t;
									}
								}
							return t;
						},
					],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					maxBodyLength: -1,
					validateStatus: function (t) {
						return t >= 200 && t < 300;
					},
					headers: { common: { Accept: "application/json, text/plain, */*" } },
				};
			s.forEach(["delete", "get", "head"], function (t) {
				h.headers[t] = {};
			}),
				s.forEach(["post", "put", "patch"], function (t) {
					h.headers[t] = s.merge(a);
				}),
				(t.exports = h);
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t, e, r, s, n) {
				return (
					(t.config = e),
					r && (t.code = r),
					(t.request = s),
					(t.response = n),
					(t.isAxiosError = !0),
					(t.toJSON = function () {
						return {
							message: this.message,
							name: this.name,
							description: this.description,
							number: this.number,
							fileName: this.fileName,
							lineNumber: this.lineNumber,
							columnNumber: this.columnNumber,
							stack: this.stack,
							config: this.config,
							code: this.code,
							status:
								this.response && this.response.status
									? this.response.status
									: null,
						};
					}),
					t
				);
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = {
				silentJSONParsing: !0,
				forcedJSONParsing: !0,
				clarifyTimeoutError: !1,
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(7);
			t.exports = function (t, e, r, n, o) {
				var i = new Error(t);
				return s(i, e, r, n, o);
			};
		},
		function (t, e) {
			t.exports = { version: "0.26.1" };
		},
		function (t, e, r) {
			"use strict";
			t.exports = function t(e, r, s) {
				if ("object" != typeof e || null === e)
					throw new Error("Non object passed to convertKeys: " + e);
				if (Array.isArray(e)) return e;
				Array.isArray(s) || (s = []);
				for (const n in e)
					if (e.hasOwnProperty(n)) {
						const o = r(n);
						"object" == typeof e[n] &&
							null !== e[n] &&
							(s.includes(n) || s.includes(o) || (e[n] = t(e[n], r, s))),
							o !== n && ((e[o] = e[n]), delete e[n]);
					}
				return e;
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(26);
			class n {
				constructor(t) {
					t && this.fromData(t);
				}
				fromData(t) {
					if ("string" == typeof t) {
						const [e, r] = s(t);
						t = { name: e, email: r };
					}
					if ("object" != typeof t)
						throw new Error("Expecting object or string for EmailAddress data");
					const { name: e, email: r } = t;
					this.setEmail(r), this.setName(e);
				}
				setName(t) {
					if (void 0 !== t) {
						if ("string" != typeof t)
							throw new Error("String expected for `name`");
						this.name = t;
					}
				}
				setEmail(t) {
					if (void 0 === t) throw new Error("Must provide `email`");
					if ("string" != typeof t)
						throw new Error("String expected for `email`");
					this.email = t;
				}
				toJSON() {
					const { email: t, name: e } = this,
						r = { email: t };
					return "" !== e && (r.name = e), r;
				}
				static create(t) {
					return Array.isArray(t)
						? t.filter((t) => !!t).map((t) => this.create(t))
						: t instanceof n
						? t
						: new n(t);
				}
			}
			t.exports = n;
		},
		function (t, e, r) {
			"use strict";
			const { Client: s } = r(33),
				{
					classes: { Mail: n },
				} = r(25);
			t.exports = class {
				constructor() {
					this.setClient(new s()),
						this.setSubstitutionWrappers("{{", "}}"),
						(this.secretRules = []);
				}
				setClient(t) {
					return (this.client = t), this;
				}
				setApiKey(t) {
					return this.client.setApiKey(t), this;
				}
				setTwilioEmailAuth(t, e) {
					this.client.setTwilioEmailAuth(t, e);
				}
				setTimeout(t) {
					void 0 !== t && this.client.setDefaultRequest("timeout", t);
				}
				setSubstitutionWrappers(t, e) {
					if (void 0 === t || void 0 === e)
						throw new Error("Must provide both left and right side wrappers");
					return (
						Array.isArray(this.substitutionWrappers) ||
							(this.substitutionWrappers = []),
						(this.substitutionWrappers[0] = t),
						(this.substitutionWrappers[1] = e),
						this
					);
				}
				setSecretRules(t) {
					t instanceof Array || (t = [t]);
					const e = t.map(function (t) {
						const e = typeof t;
						if ("string" === e) return { pattern: new RegExp(t) };
						if ("object" === e) {
							t instanceof RegExp
								? (t = { pattern: t })
								: t.hasOwnProperty("pattern") &&
								  "string" == typeof t.pattern &&
								  (t.pattern = new RegExp(t.pattern));
							try {
								return t.pattern.test(""), t;
							} catch (t) {}
						}
					});
					this.secretRules = e.filter(function (t) {
						return t;
					});
				}
				filterSecrets(t) {
					if ("object" == typeof t && !t.hasOwnProperty("content")) return;
					const e = this;
					t.content.forEach(function (t) {
						e.secretRules.forEach(function (e) {
							if (e.hasOwnProperty("pattern") && !e.pattern.test(t.value))
								return;
							let r = `The pattern '${e.pattern}'`;
							throw (
								(e.name && (r += `identified by '${e.name}'`),
								(r += " was found in the Mail content!"),
								new Error(r))
							);
						});
					});
				}
				send(t, e = !1, r) {
					if (
						("function" == typeof e && ((r = e), (e = !1)), Array.isArray(t))
					) {
						const s = Promise.all(t.map((t) => this.send(t, e)));
						return r && s.then((t) => r(null, t)).catch((t) => r(t, null)), s;
					}
					try {
						void 0 === t.isMultiple && (t.isMultiple = e),
							void 0 === t.substitutionWrappers &&
								(t.substitutionWrappers = this.substitutionWrappers);
						const s = n.create(t),
							o = s.toJSON();
						this.filterSecrets(o);
						const i = {
							method: "POST",
							url: "/v3/mail/send",
							headers: s.headers,
							body: o,
						};
						return this.client.request(i, r);
					} catch (t) {
						return r && r(t, null), Promise.reject(t);
					}
				}
				sendMultiple(t, e) {
					return this.send(t, !0, e);
				}
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(35),
				n = r(66),
				{
					helpers: { mergeData: o },
					classes: { Response: i, ResponseError: a },
				} = r(25);
			t.exports = class {
				constructor() {
					(this.auth = ""),
						(this.impersonateSubuser = ""),
						(this.defaultHeaders = {
							Accept: "application/json",
							"Content-Type": "application/json",
							"User-Agent": "sendgrid/" + n.version + ";nodejs",
						}),
						(this.defaultRequest = {
							baseUrl: "https://api.sendgrid.com/",
							url: "",
							method: "GET",
							headers: {},
							maxContentLength: 1 / 0,
							maxBodyLength: 1 / 0,
						});
				}
				setApiKey(t) {
					(this.auth = "Bearer " + t),
						this.setDefaultRequest("baseUrl", "https://api.sendgrid.com/"),
						this.isValidApiKey(t) ||
							console.warn('API key does not start with "SG.".');
				}
				setTwilioEmailAuth(t, e) {
					const r = Buffer.from(t + ":" + e).toString("base64");
					(this.auth = "Basic " + r),
						this.setDefaultRequest("baseUrl", "https://email.twilio.com/"),
						this.isValidTwilioAuth(t, e) ||
							console.warn(
								"Twilio Email credentials must be non-empty strings.",
							);
				}
				isValidApiKey(t) {
					return this.isString(t) && t.trim().startsWith("SG.");
				}
				isValidTwilioAuth(t, e) {
					return this.isString(t) && t && this.isString(e) && e;
				}
				isString(t) {
					return "string" == typeof t || t instanceof String;
				}
				setImpersonateSubuser(t) {
					this.impersonateSubuser = t;
				}
				setDefaultHeader(t, e) {
					return null !== t && "object" == typeof t
						? (Object.assign(this.defaultHeaders, t), this)
						: ((this.defaultHeaders[t] = e), this);
				}
				setDefaultRequest(t, e) {
					return null !== t && "object" == typeof t
						? (Object.assign(this.defaultRequest, t), this)
						: ((this.defaultRequest[t] = e), this);
				}
				createHeaders(t) {
					const e = o(this.defaultHeaders, t);
					return (
						void 0 === e.Authorization &&
							this.auth &&
							(e.Authorization = this.auth),
						this.impersonateSubuser &&
							(e["On-Behalf-Of"] = this.impersonateSubuser),
						e
					);
				}
				createRequest(t) {
					let e = {
						url: t.uri || t.url,
						baseUrl: t.baseUrl,
						method: t.method,
						data: t.body,
						params: t.qs,
						headers: t.headers,
					};
					return (
						(e = o(this.defaultRequest, e)),
						(e.headers = this.createHeaders(e.headers)),
						(e.baseURL = e.baseUrl),
						delete e.baseUrl,
						e
					);
				}
				request(t, e) {
					t = this.createRequest(t);
					const r = new Promise((e, r) => {
						s(t)
							.then((t) => e([new i(t.status, t.data, t.headers), t.data]))
							.catch((t) =>
								t.response && t.response.status >= 400
									? r(new a(t.response))
									: r(t),
							);
					});
					if (e && "function" != typeof e)
						throw new Error("Callback passed is not a function.");
					return e ? r.then((t) => e(null, t)).catch((t) => e(t, null)) : r;
				}
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t, e) {
				return function () {
					for (var r = new Array(arguments.length), s = 0; s < r.length; s++)
						r[s] = arguments[s];
					return t.apply(e, r);
				};
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(9);
			t.exports = function (t, e, r) {
				var n = r.config.validateStatus;
				r.status && n && !n(r.status)
					? e(
							s(
								"Request failed with status code " + r.status,
								r.config,
								null,
								r.request,
								r,
							),
					  )
					: t(r);
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(44),
				n = r(45);
			t.exports = function (t, e) {
				return t && !s(e) ? n(t, e) : e;
			};
		},
		function (t, e) {
			t.exports = require("http");
		},
		function (t, e) {
			t.exports = require("https");
		},
		function (t, e, r) {
			var s = r(21),
				n = s.URL,
				o = r(18),
				i = r(19),
				a = r(49).Writable,
				c = r(50),
				u = r(51),
				h = ["abort", "aborted", "connect", "error", "socket", "timeout"],
				f = Object.create(null);
			h.forEach(function (t) {
				f[t] = function (e, r, s) {
					this._redirectable.emit(t, e, r, s);
				};
			});
			var p = x("ERR_INVALID_URL", "Invalid URL", TypeError),
				d = x("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
				l = x(
					"ERR_FR_TOO_MANY_REDIRECTS",
					"Maximum number of redirects exceeded",
				),
				m = x(
					"ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
					"Request body larger than maxBodyLength limit",
				),
				g = x("ERR_STREAM_WRITE_AFTER_END", "write after end");
			function y(t, e) {
				a.call(this),
					this._sanitizeOptions(t),
					(this._options = t),
					(this._ended = !1),
					(this._ending = !1),
					(this._redirectCount = 0),
					(this._redirects = []),
					(this._requestBodyLength = 0),
					(this._requestBodyBuffers = []),
					e && this.on("response", e);
				var r = this;
				(this._onNativeResponse = function (t) {
					r._processResponse(t);
				}),
					this._performRequest();
			}
			function b(t) {
				var e = { maxRedirects: 21, maxBodyLength: 10485760 },
					r = {};
				return (
					Object.keys(t).forEach(function (o) {
						var i = o + ":",
							a = (r[i] = t[o]),
							h = (e[o] = Object.create(a));
						Object.defineProperties(h, {
							request: {
								value: function (t, o, a) {
									if (A(t)) {
										var h;
										try {
											h = v(new n(t));
										} catch (e) {
											h = s.parse(t);
										}
										if (!A(h.protocol)) throw new p({ input: t });
										t = h;
									} else
										n && t instanceof n
											? (t = v(t))
											: ((a = o), (o = t), (t = { protocol: i }));
									return (
										_(o) && ((a = o), (o = null)),
										((o = Object.assign(
											{
												maxRedirects: e.maxRedirects,
												maxBodyLength: e.maxBodyLength,
											},
											t,
											o,
										)).nativeProtocols = r),
										A(o.host) || A(o.hostname) || (o.hostname = "::1"),
										c.equal(o.protocol, i, "protocol mismatch"),
										u("options", o),
										new y(o, a)
									);
								},
								configurable: !0,
								enumerable: !0,
								writable: !0,
							},
							get: {
								value: function (t, e, r) {
									var s = h.request(t, e, r);
									return s.end(), s;
								},
								configurable: !0,
								enumerable: !0,
								writable: !0,
							},
						});
					}),
					e
				);
			}
			function w() {}
			function v(t) {
				var e = {
					protocol: t.protocol,
					hostname: t.hostname.startsWith("[")
						? t.hostname.slice(1, -1)
						: t.hostname,
					hash: t.hash,
					search: t.search,
					pathname: t.pathname,
					path: t.pathname + t.search,
					href: t.href,
				};
				return "" !== t.port && (e.port = Number(t.port)), e;
			}
			function C(t, e) {
				var r;
				for (var s in e) t.test(s) && ((r = e[s]), delete e[s]);
				return null == r ? void 0 : String(r).trim();
			}
			function x(t, e, r) {
				function s(r) {
					Error.captureStackTrace(this, this.constructor),
						Object.assign(this, r || {}),
						(this.code = t),
						(this.message = this.cause ? e + ": " + this.cause.message : e);
				}
				return (
					(s.prototype = new (r || Error)()),
					(s.prototype.constructor = s),
					(s.prototype.name = "Error [" + t + "]"),
					s
				);
			}
			function E(t) {
				for (var e of h) t.removeListener(e, f[e]);
				t.on("error", w), t.abort();
			}
			function A(t) {
				return "string" == typeof t || t instanceof String;
			}
			function _(t) {
				return "function" == typeof t;
			}
			(y.prototype = Object.create(a.prototype)),
				(y.prototype.abort = function () {
					E(this._currentRequest), this.emit("abort");
				}),
				(y.prototype.write = function (t, e, r) {
					if (this._ending) throw new g();
					if (!A(t) && ("object" != typeof (s = t) || !("length" in s)))
						throw new TypeError(
							"data should be a string, Buffer or Uint8Array",
						);
					var s;
					_(e) && ((r = e), (e = null)),
						0 !== t.length
							? this._requestBodyLength + t.length <=
							  this._options.maxBodyLength
								? ((this._requestBodyLength += t.length),
								  this._requestBodyBuffers.push({ data: t, encoding: e }),
								  this._currentRequest.write(t, e, r))
								: (this.emit("error", new m()), this.abort())
							: r && r();
				}),
				(y.prototype.end = function (t, e, r) {
					if (
						(_(t) ? ((r = t), (t = e = null)) : _(e) && ((r = e), (e = null)),
						t)
					) {
						var s = this,
							n = this._currentRequest;
						this.write(t, e, function () {
							(s._ended = !0), n.end(null, null, r);
						}),
							(this._ending = !0);
					} else
						(this._ended = this._ending = !0),
							this._currentRequest.end(null, null, r);
				}),
				(y.prototype.setHeader = function (t, e) {
					(this._options.headers[t] = e), this._currentRequest.setHeader(t, e);
				}),
				(y.prototype.removeHeader = function (t) {
					delete this._options.headers[t], this._currentRequest.removeHeader(t);
				}),
				(y.prototype.setTimeout = function (t, e) {
					var r = this;
					function s(e) {
						e.setTimeout(t),
							e.removeListener("timeout", e.destroy),
							e.addListener("timeout", e.destroy);
					}
					function n(e) {
						r._timeout && clearTimeout(r._timeout),
							(r._timeout = setTimeout(function () {
								r.emit("timeout"), o();
							}, t)),
							s(e);
					}
					function o() {
						r._timeout && (clearTimeout(r._timeout), (r._timeout = null)),
							r.removeListener("abort", o),
							r.removeListener("error", o),
							r.removeListener("response", o),
							e && r.removeListener("timeout", e),
							r.socket || r._currentRequest.removeListener("socket", n);
					}
					return (
						e && this.on("timeout", e),
						this.socket
							? n(this.socket)
							: this._currentRequest.once("socket", n),
						this.on("socket", s),
						this.on("abort", o),
						this.on("error", o),
						this.on("response", o),
						this
					);
				}),
				[
					"flushHeaders",
					"getHeader",
					"setNoDelay",
					"setSocketKeepAlive",
				].forEach(function (t) {
					y.prototype[t] = function (e, r) {
						return this._currentRequest[t](e, r);
					};
				}),
				["aborted", "connection", "socket"].forEach(function (t) {
					Object.defineProperty(y.prototype, t, {
						get: function () {
							return this._currentRequest[t];
						},
					});
				}),
				(y.prototype._sanitizeOptions = function (t) {
					if (
						(t.headers || (t.headers = {}),
						t.host && (t.hostname || (t.hostname = t.host), delete t.host),
						!t.pathname && t.path)
					) {
						var e = t.path.indexOf("?");
						e < 0
							? (t.pathname = t.path)
							: ((t.pathname = t.path.substring(0, e)),
							  (t.search = t.path.substring(e)));
					}
				}),
				(y.prototype._performRequest = function () {
					var t = this._options.protocol,
						e = this._options.nativeProtocols[t];
					if (e) {
						if (this._options.agents) {
							var r = t.slice(0, -1);
							this._options.agent = this._options.agents[r];
						}
						var n = (this._currentRequest = e.request(
							this._options,
							this._onNativeResponse,
						));
						for (var o of ((n._redirectable = this), h)) n.on(o, f[o]);
						if (
							((this._currentUrl = /^\//.test(this._options.path)
								? s.format(this._options)
								: this._options.path),
							this._isRedirect)
						) {
							var i = 0,
								a = this,
								c = this._requestBodyBuffers;
							!(function t(e) {
								if (n === a._currentRequest)
									if (e) a.emit("error", e);
									else if (i < c.length) {
										var r = c[i++];
										n.finished || n.write(r.data, r.encoding, t);
									} else a._ended && n.end();
							})();
						}
					} else this.emit("error", new TypeError("Unsupported protocol " + t));
				}),
				(y.prototype._processResponse = function (t) {
					var e = t.statusCode;
					this._options.trackRedirects &&
						this._redirects.push({
							url: this._currentUrl,
							headers: t.headers,
							statusCode: e,
						});
					var r = t.headers.location;
					if (!r || !1 === this._options.followRedirects || e < 300 || e >= 400)
						return (
							(t.responseUrl = this._currentUrl),
							(t.redirects = this._redirects),
							this.emit("response", t),
							void (this._requestBodyBuffers = [])
						);
					if (
						(E(this._currentRequest),
						t.destroy(),
						++this._redirectCount > this._options.maxRedirects)
					)
						this.emit("error", new l());
					else {
						var n,
							o = this._options.beforeRedirect;
						o &&
							(n = Object.assign(
								{ Host: t.req.getHeader("host") },
								this._options.headers,
							));
						var i = this._options.method;
						(((301 === e || 302 === e) && "POST" === this._options.method) ||
							(303 === e && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
							((this._options.method = "GET"),
							(this._requestBodyBuffers = []),
							C(/^content-/i, this._options.headers));
						var a,
							h = C(/^host$/i, this._options.headers),
							f = s.parse(this._currentUrl),
							p = h || f.host,
							m = /^\w+:/.test(r)
								? this._currentUrl
								: s.format(Object.assign(f, { host: p }));
						try {
							a = s.resolve(m, r);
						} catch (t) {
							return void this.emit("error", new d({ cause: t }));
						}
						u("redirecting to", a), (this._isRedirect = !0);
						var g = s.parse(a);
						if (
							(Object.assign(this._options, g),
							((g.protocol !== f.protocol && "https:" !== g.protocol) ||
								(g.host !== p &&
									!(function (t, e) {
										c(A(t) && A(e));
										var r = t.length - e.length - 1;
										return r > 0 && "." === t[r] && t.endsWith(e);
									})(g.host, p))) &&
								C(/^(?:authorization|cookie)$/i, this._options.headers),
							_(o))
						) {
							var y = { headers: t.headers, statusCode: e },
								b = { url: m, method: i, headers: n };
							try {
								o(this._options, y, b);
							} catch (t) {
								return void this.emit("error", t);
							}
							this._sanitizeOptions(this._options);
						}
						try {
							this._performRequest();
						} catch (t) {
							this.emit("error", new d({ cause: t }));
						}
					}
				}),
				(t.exports = b({ http: o, https: i })),
				(t.exports.wrap = b);
		},
		function (t, e) {
			t.exports = require("url");
		},
		function (t, e, r) {
			t.exports = function (t) {
				function e(t) {
					let r,
						n,
						o,
						i = null;
					function a(...t) {
						if (!a.enabled) return;
						const s = a,
							n = Number(new Date()),
							o = n - (r || n);
						(s.diff = o),
							(s.prev = r),
							(s.curr = n),
							(r = n),
							(t[0] = e.coerce(t[0])),
							"string" != typeof t[0] && t.unshift("%O");
						let i = 0;
						(t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, n) => {
							if ("%%" === r) return "%";
							i++;
							const o = e.formatters[n];
							if ("function" == typeof o) {
								const e = t[i];
								(r = o.call(s, e)), t.splice(i, 1), i--;
							}
							return r;
						})),
							e.formatArgs.call(s, t);
						(s.log || e.log).apply(s, t);
					}
					return (
						(a.namespace = t),
						(a.useColors = e.useColors()),
						(a.color = e.selectColor(t)),
						(a.extend = s),
						(a.destroy = e.destroy),
						Object.defineProperty(a, "enabled", {
							enumerable: !0,
							configurable: !1,
							get: () =>
								null !== i
									? i
									: (n !== e.namespaces &&
											((n = e.namespaces), (o = e.enabled(t))),
									  o),
							set: (t) => {
								i = t;
							},
						}),
						"function" == typeof e.init && e.init(a),
						a
					);
				}
				function s(t, r) {
					const s = e(this.namespace + (void 0 === r ? ":" : r) + t);
					return (s.log = this.log), s;
				}
				function n(t) {
					return t
						.toString()
						.substring(2, t.toString().length - 2)
						.replace(/\.\*\?$/, "*");
				}
				return (
					(e.debug = e),
					(e.default = e),
					(e.coerce = function (t) {
						if (t instanceof Error) return t.stack || t.message;
						return t;
					}),
					(e.disable = function () {
						const t = [
							...e.names.map(n),
							...e.skips.map(n).map((t) => "-" + t),
						].join(",");
						return e.enable(""), t;
					}),
					(e.enable = function (t) {
						let r;
						e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
						const s = ("string" == typeof t ? t : "").split(/[\s,]+/),
							n = s.length;
						for (r = 0; r < n; r++)
							s[r] &&
								("-" === (t = s[r].replace(/\*/g, ".*?"))[0]
									? e.skips.push(new RegExp("^" + t.slice(1) + "$"))
									: e.names.push(new RegExp("^" + t + "$")));
					}),
					(e.enabled = function (t) {
						if ("*" === t[t.length - 1]) return !0;
						let r, s;
						for (r = 0, s = e.skips.length; r < s; r++)
							if (e.skips[r].test(t)) return !1;
						for (r = 0, s = e.names.length; r < s; r++)
							if (e.names[r].test(t)) return !0;
						return !1;
					}),
					(e.humanize = r(54)),
					(e.destroy = function () {
						console.warn(
							"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
						);
					}),
					Object.keys(t).forEach((r) => {
						e[r] = t[r];
					}),
					(e.names = []),
					(e.skips = []),
					(e.formatters = {}),
					(e.selectColor = function (t) {
						let r = 0;
						for (let e = 0; e < t.length; e++)
							(r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
						return e.colors[Math.abs(r) % e.colors.length];
					}),
					e.enable(e.load()),
					e
				);
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				return !(!t || !t.__CANCEL__);
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			t.exports = function (t, e) {
				e = e || {};
				var r = {};
				function n(t, e) {
					return s.isPlainObject(t) && s.isPlainObject(e)
						? s.merge(t, e)
						: s.isPlainObject(e)
						? s.merge({}, e)
						: s.isArray(e)
						? e.slice()
						: e;
				}
				function o(r) {
					return s.isUndefined(e[r])
						? s.isUndefined(t[r])
							? void 0
							: n(void 0, t[r])
						: n(t[r], e[r]);
				}
				function i(t) {
					if (!s.isUndefined(e[t])) return n(void 0, e[t]);
				}
				function a(r) {
					return s.isUndefined(e[r])
						? s.isUndefined(t[r])
							? void 0
							: n(void 0, t[r])
						: n(void 0, e[r]);
				}
				function c(r) {
					return r in e ? n(t[r], e[r]) : r in t ? n(void 0, t[r]) : void 0;
				}
				var u = {
					url: i,
					method: i,
					data: i,
					baseURL: a,
					transformRequest: a,
					transformResponse: a,
					paramsSerializer: a,
					timeout: a,
					timeoutMessage: a,
					withCredentials: a,
					adapter: a,
					responseType: a,
					xsrfCookieName: a,
					xsrfHeaderName: a,
					onUploadProgress: a,
					onDownloadProgress: a,
					decompress: a,
					maxContentLength: a,
					maxBodyLength: a,
					transport: a,
					httpAgent: a,
					httpsAgent: a,
					cancelToken: a,
					socketPath: a,
					responseEncoding: a,
					validateStatus: c,
				};
				return (
					s.forEach(Object.keys(t).concat(Object.keys(e)), function (t) {
						var e = u[t] || o,
							n = e(t);
						(s.isUndefined(n) && e !== c) || (r[t] = n);
					}),
					r
				);
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(67),
				n = r(80);
			t.exports = { classes: s, helpers: n };
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				if (-1 === t.indexOf("<")) return ["", t];
				let [e, r] = t.split("<");
				return (e = e.trim()), (r = r.replace(">", "").trim()), [e, r];
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(12),
				n = r(2),
				o = r(4),
				i = r(3),
				a = r(74),
				c = r(28);
			t.exports = class {
				constructor(t) {
					(this.to = []),
						(this.cc = []),
						(this.bcc = []),
						(this.headers = {}),
						(this.customArgs = {}),
						(this.substitutions = {}),
						(this.substitutionWrappers = ["{{", "}}"]),
						(this.dynamicTemplateData = {}),
						t && this.fromData(t);
				}
				fromData(t) {
					if ("object" != typeof t)
						throw new Error("Expecting object for Mail data");
					(t = i(t)),
						(t = n(t, [
							"substitutions",
							"dynamicTemplateData",
							"customArgs",
							"headers",
						]));
					const {
						to: e,
						from: r,
						cc: s,
						bcc: o,
						subject: a,
						headers: c,
						customArgs: u,
						sendAt: h,
						substitutions: f,
						substitutionWrappers: p,
						dynamicTemplateData: d,
					} = t;
					this.setTo(e),
						this.setFrom(r),
						this.setCc(s),
						this.setBcc(o),
						this.setSubject(a),
						this.setHeaders(c),
						this.setSubstitutions(f),
						this.setSubstitutionWrappers(p),
						this.setCustomArgs(u),
						this.setDynamicTemplateData(d),
						this.setSendAt(h);
				}
				setSubject(t) {
					if (void 0 !== t) {
						if ("string" != typeof t)
							throw new Error("String expected for `subject`");
						this.subject = t;
					}
				}
				setSendAt(t) {
					if (void 0 !== t) {
						if (!Number.isInteger(t))
							throw new Error("Integer expected for `sendAt`");
						this.sendAt = t;
					}
				}
				setTo(t) {
					void 0 !== t &&
						(Array.isArray(t) || (t = [t]), (this.to = s.create(t)));
				}
				setFrom(t) {
					void 0 !== t && (this.from = s.create(t));
				}
				addTo(t) {
					void 0 !== t && this.to.push(s.create(t));
				}
				setCc(t) {
					void 0 !== t &&
						(Array.isArray(t) || (t = [t]), (this.cc = s.create(t)));
				}
				addCc(t) {
					void 0 !== t && this.cc.push(s.create(t));
				}
				setBcc(t) {
					void 0 !== t &&
						(Array.isArray(t) || (t = [t]), (this.bcc = s.create(t)));
				}
				addBcc(t) {
					void 0 !== t && this.bcc.push(s.create(t));
				}
				setHeaders(t) {
					if (void 0 !== t) {
						if ("object" != typeof t || null === t)
							throw new Error("Object expected for `headers`");
						this.headers = t;
					}
				}
				addHeader(t, e) {
					if ("string" != typeof t)
						throw new Error("String expected for header key");
					if ("string" != typeof e)
						throw new Error("String expected for header value");
					this.headers[t] = e;
				}
				setCustomArgs(t) {
					if (void 0 !== t) {
						if ("object" != typeof t || null === t)
							throw new Error("Object expected for `customArgs`");
						this.customArgs = t;
					}
				}
				addCustomArg(t, e) {
					if ("string" != typeof t)
						throw new Error("String expected for custom arg key");
					if ("string" != typeof e)
						throw new Error("String expected for custom arg value");
					this.customArgs[t] = e;
				}
				setSubstitutions(t) {
					if (void 0 !== t) {
						if ("object" != typeof t)
							throw new Error("Object expected for `substitutions`");
						this.substitutions = t;
					}
				}
				addSubstitution(t, e) {
					if ("string" != typeof t)
						throw new Error("String expected for substitution key");
					if ("string" != typeof e && "number" != typeof e)
						throw new Error("String or Number expected for substitution value");
					this.substitutions[t] = e;
				}
				reverseMergeSubstitutions(t) {
					if (null != t) {
						if ("object" != typeof t)
							throw new Error(
								"Object expected for `substitutions` in reverseMergeSubstitutions",
							);
						this.substitutions = Object.assign({}, t, this.substitutions);
					}
				}
				setSubstitutionWrappers(t) {
					if (null != t) {
						if (!Array.isArray(t) || 2 !== t.length)
							throw new Error(
								"Array expected with two elements for `substitutionWrappers`",
							);
						this.substitutionWrappers = t;
					}
				}
				deepMergeDynamicTemplateData(t) {
					if (null != t) {
						if ("object" != typeof t)
							throw new Error(
								"Object expected for `dynamicTemplateData` in deepMergeDynamicTemplateData",
							);
						this.dynamicTemplateData = a(t, this.dynamicTemplateData);
					}
				}
				setDynamicTemplateData(t) {
					if (void 0 !== t) {
						if ("object" != typeof t)
							throw new Error("Object expected for `dynamicTemplateData`");
						this.dynamicTemplateData = t;
					}
				}
				toJSON() {
					const {
							to: t,
							from: e,
							cc: r,
							bcc: s,
							subject: n,
							headers: i,
							customArgs: a,
							sendAt: u,
							substitutions: h,
							substitutionWrappers: f,
							dynamicTemplateData: p,
						} = this,
						d = { to: t };
					if (
						(Array.isArray(r) && r.length > 0 && (d.cc = r),
						Array.isArray(s) && s.length > 0 && (d.bcc = s),
						Object.keys(i).length > 0 && (d.headers = i),
						h && Object.keys(h).length > 0)
					) {
						const [t, e] = f;
						d.substitutions = c(h, t, e);
					}
					return (
						Object.keys(a).length > 0 && (d.customArgs = a),
						p && Object.keys(p).length > 0 && (d.dynamicTemplateData = p),
						void 0 !== n && (d.subject = n),
						void 0 !== u && (d.sendAt = u),
						void 0 !== e && (d.from = e),
						o(d, [
							"substitutions",
							"dynamicTemplateData",
							"customArgs",
							"headers",
						])
					);
				}
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function t(e, r = "{{", s = "}}") {
				if (Array.isArray(e)) return e.map((e) => t(e, r, s));
				const n = {};
				for (const t in e) e.hasOwnProperty(t) && (n[r + t + s] = String(e[t]));
				return n;
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				return t.map((t) =>
					"object" == typeof t && null !== t && "function" == typeof t.toJSON
						? t.toJSON()
						: t,
				);
			};
		},
		function (t, e, r) {
			const s = r(31),
				{
					SENDGRID_API_KEY: n,
					SENDGRID_TO_EMAIL: o,
					SENDGRID_FROM_EMAIL: i,
				} = process.env;
			e.handler = async (t, e, r) => {
				const a = JSON.parse(t.body);
				s.setApiKey(n);
				const c = Object.keys(a)
						.map((t) => `${t}: ${a[t]}`)
						.join("<br><br>"),
					u = { to: o, from: i, subject: "Contact Form Submission", html: c };
				try {
					return await s.send(u), { statusCode: 200, body: "Message sent" };
				} catch (t) {
					return {
						statusCode: t.code ? t.code : 500,
						body: t.message
							? t.message
							: "Error attempting to send email message",
					};
				}
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(32),
				n = r(13);
			(t.exports = s), (t.exports.MailService = n);
		},
		function (t, e, r) {
			"use strict";
			const s = r(13);
			t.exports = new s();
		},
		function (t, e, r) {
			"use strict";
			const s = r(34),
				n = r(14);
			(t.exports = s), (t.exports.Client = n);
		},
		function (t, e, r) {
			"use strict";
			const s = r(14);
			t.exports = new s();
		},
		function (t, e, r) {
			t.exports = r(36);
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(15),
				o = r(37),
				i = r(24);
			var a = (function t(e) {
				var r = new o(e),
					a = n(o.prototype.request, r);
				return (
					s.extend(a, o.prototype, r),
					s.extend(a, r),
					(a.create = function (r) {
						return t(i(e, r));
					}),
					a
				);
			})(r(6));
			(a.Axios = o),
				(a.Cancel = r(1)),
				(a.CancelToken = r(63)),
				(a.isCancel = r(23)),
				(a.VERSION = r(10).version),
				(a.all = function (t) {
					return Promise.all(t);
				}),
				(a.spread = r(64)),
				(a.isAxiosError = r(65)),
				(t.exports = a),
				(t.exports.default = a);
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(5),
				o = r(38),
				i = r(39),
				a = r(24),
				c = r(62),
				u = c.validators;
			function h(t) {
				(this.defaults = t),
					(this.interceptors = { request: new o(), response: new o() });
			}
			(h.prototype.request = function (t, e) {
				"string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
					(e = a(this.defaults, e)).method
						? (e.method = e.method.toLowerCase())
						: this.defaults.method
						? (e.method = this.defaults.method.toLowerCase())
						: (e.method = "get");
				var r = e.transitional;
				void 0 !== r &&
					c.assertOptions(
						r,
						{
							silentJSONParsing: u.transitional(u.boolean),
							forcedJSONParsing: u.transitional(u.boolean),
							clarifyTimeoutError: u.transitional(u.boolean),
						},
						!1,
					);
				var s = [],
					n = !0;
				this.interceptors.request.forEach(function (t) {
					("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
						((n = n && t.synchronous), s.unshift(t.fulfilled, t.rejected));
				});
				var o,
					h = [];
				if (
					(this.interceptors.response.forEach(function (t) {
						h.push(t.fulfilled, t.rejected);
					}),
					!n)
				) {
					var f = [i, void 0];
					for (
						Array.prototype.unshift.apply(f, s),
							f = f.concat(h),
							o = Promise.resolve(e);
						f.length;

					)
						o = o.then(f.shift(), f.shift());
					return o;
				}
				for (var p = e; s.length; ) {
					var d = s.shift(),
						l = s.shift();
					try {
						p = d(p);
					} catch (t) {
						l(t);
						break;
					}
				}
				try {
					o = i(p);
				} catch (t) {
					return Promise.reject(t);
				}
				for (; h.length; ) o = o.then(h.shift(), h.shift());
				return o;
			}),
				(h.prototype.getUri = function (t) {
					return (
						(t = a(this.defaults, t)),
						n(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
					);
				}),
				s.forEach(["delete", "get", "head", "options"], function (t) {
					h.prototype[t] = function (e, r) {
						return this.request(
							a(r || {}, { method: t, url: e, data: (r || {}).data }),
						);
					};
				}),
				s.forEach(["post", "put", "patch"], function (t) {
					h.prototype[t] = function (e, r, s) {
						return this.request(a(s || {}, { method: t, url: e, data: r }));
					};
				}),
				(t.exports = h);
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			function n() {
				this.handlers = [];
			}
			(n.prototype.use = function (t, e, r) {
				return (
					this.handlers.push({
						fulfilled: t,
						rejected: e,
						synchronous: !!r && r.synchronous,
						runWhen: r ? r.runWhen : null,
					}),
					this.handlers.length - 1
				);
			}),
				(n.prototype.eject = function (t) {
					this.handlers[t] && (this.handlers[t] = null);
				}),
				(n.prototype.forEach = function (t) {
					s.forEach(this.handlers, function (e) {
						null !== e && t(e);
					});
				}),
				(t.exports = n);
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(40),
				o = r(23),
				i = r(6),
				a = r(1);
			function c(t) {
				if (
					(t.cancelToken && t.cancelToken.throwIfRequested(),
					t.signal && t.signal.aborted)
				)
					throw new a("canceled");
			}
			t.exports = function (t) {
				return (
					c(t),
					(t.headers = t.headers || {}),
					(t.data = n.call(t, t.data, t.headers, t.transformRequest)),
					(t.headers = s.merge(
						t.headers.common || {},
						t.headers[t.method] || {},
						t.headers,
					)),
					s.forEach(
						["delete", "get", "head", "post", "put", "patch", "common"],
						function (e) {
							delete t.headers[e];
						},
					),
					(t.adapter || i.adapter)(t).then(
						function (e) {
							return (
								c(t),
								(e.data = n.call(t, e.data, e.headers, t.transformResponse)),
								e
							);
						},
						function (e) {
							return (
								o(e) ||
									(c(t),
									e &&
										e.response &&
										(e.response.data = n.call(
											t,
											e.response.data,
											e.response.headers,
											t.transformResponse,
										))),
								Promise.reject(e)
							);
						},
					)
				);
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(6);
			t.exports = function (t, e, r) {
				var o = this || n;
				return (
					s.forEach(r, function (r) {
						t = r.call(o, t, e);
					}),
					t
				);
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			t.exports = function (t, e) {
				s.forEach(t, function (r, s) {
					s !== e &&
						s.toUpperCase() === e.toUpperCase() &&
						((t[e] = r), delete t[s]);
				});
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(16),
				o = r(43),
				i = r(5),
				a = r(17),
				c = r(46),
				u = r(47),
				h = r(9),
				f = r(8),
				p = r(1);
			t.exports = function (t) {
				return new Promise(function (e, r) {
					var d,
						l = t.data,
						m = t.headers,
						g = t.responseType;
					function y() {
						t.cancelToken && t.cancelToken.unsubscribe(d),
							t.signal && t.signal.removeEventListener("abort", d);
					}
					s.isFormData(l) && delete m["Content-Type"];
					var b = new XMLHttpRequest();
					if (t.auth) {
						var w = t.auth.username || "",
							v = t.auth.password
								? unescape(encodeURIComponent(t.auth.password))
								: "";
						m.Authorization = "Basic " + btoa(w + ":" + v);
					}
					var C = a(t.baseURL, t.url);
					function x() {
						if (b) {
							var s =
									"getAllResponseHeaders" in b
										? c(b.getAllResponseHeaders())
										: null,
								o = {
									data:
										g && "text" !== g && "json" !== g
											? b.response
											: b.responseText,
									status: b.status,
									statusText: b.statusText,
									headers: s,
									config: t,
									request: b,
								};
							n(
								function (t) {
									e(t), y();
								},
								function (t) {
									r(t), y();
								},
								o,
							),
								(b = null);
						}
					}
					if (
						(b.open(
							t.method.toUpperCase(),
							i(C, t.params, t.paramsSerializer),
							!0,
						),
						(b.timeout = t.timeout),
						"onloadend" in b
							? (b.onloadend = x)
							: (b.onreadystatechange = function () {
									b &&
										4 === b.readyState &&
										(0 !== b.status ||
											(b.responseURL &&
												0 === b.responseURL.indexOf("file:"))) &&
										setTimeout(x);
							  }),
						(b.onabort = function () {
							b && (r(h("Request aborted", t, "ECONNABORTED", b)), (b = null));
						}),
						(b.onerror = function () {
							r(h("Network Error", t, null, b)), (b = null);
						}),
						(b.ontimeout = function () {
							var e = t.timeout
									? "timeout of " + t.timeout + "ms exceeded"
									: "timeout exceeded",
								s = t.transitional || f;
							t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
								r(
									h(
										e,
										t,
										s.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
										b,
									),
								),
								(b = null);
						}),
						s.isStandardBrowserEnv())
					) {
						var E =
							(t.withCredentials || u(C)) && t.xsrfCookieName
								? o.read(t.xsrfCookieName)
								: void 0;
						E && (m[t.xsrfHeaderName] = E);
					}
					"setRequestHeader" in b &&
						s.forEach(m, function (t, e) {
							void 0 === l && "content-type" === e.toLowerCase()
								? delete m[e]
								: b.setRequestHeader(e, t);
						}),
						s.isUndefined(t.withCredentials) ||
							(b.withCredentials = !!t.withCredentials),
						g && "json" !== g && (b.responseType = t.responseType),
						"function" == typeof t.onDownloadProgress &&
							b.addEventListener("progress", t.onDownloadProgress),
						"function" == typeof t.onUploadProgress &&
							b.upload &&
							b.upload.addEventListener("progress", t.onUploadProgress),
						(t.cancelToken || t.signal) &&
							((d = function (t) {
								b &&
									(r(!t || (t && t.type) ? new p("canceled") : t),
									b.abort(),
									(b = null));
							}),
							t.cancelToken && t.cancelToken.subscribe(d),
							t.signal &&
								(t.signal.aborted
									? d()
									: t.signal.addEventListener("abort", d))),
						l || (l = null),
						b.send(l);
				});
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			t.exports = s.isStandardBrowserEnv()
				? {
						write: function (t, e, r, n, o, i) {
							var a = [];
							a.push(t + "=" + encodeURIComponent(e)),
								s.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
								s.isString(n) && a.push("path=" + n),
								s.isString(o) && a.push("domain=" + o),
								!0 === i && a.push("secure"),
								(document.cookie = a.join("; "));
						},
						read: function (t) {
							var e = document.cookie.match(
								new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
							);
							return e ? decodeURIComponent(e[3]) : null;
						},
						remove: function (t) {
							this.write(t, "", Date.now() - 864e5);
						},
				  }
				: {
						write: function () {},
						read: function () {
							return null;
						},
						remove: function () {},
				  };
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t, e) {
				return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = [
					"age",
					"authorization",
					"content-length",
					"content-type",
					"etag",
					"expires",
					"from",
					"host",
					"if-modified-since",
					"if-unmodified-since",
					"last-modified",
					"location",
					"max-forwards",
					"proxy-authorization",
					"referer",
					"retry-after",
					"user-agent",
				];
			t.exports = function (t) {
				var e,
					r,
					o,
					i = {};
				return t
					? (s.forEach(t.split("\n"), function (t) {
							if (
								((o = t.indexOf(":")),
								(e = s.trim(t.substr(0, o)).toLowerCase()),
								(r = s.trim(t.substr(o + 1))),
								e)
							) {
								if (i[e] && n.indexOf(e) >= 0) return;
								i[e] =
									"set-cookie" === e
										? (i[e] ? i[e] : []).concat([r])
										: i[e]
										? i[e] + ", " + r
										: r;
							}
					  }),
					  i)
					: i;
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			t.exports = s.isStandardBrowserEnv()
				? (function () {
						var t,
							e = /(msie|trident)/i.test(navigator.userAgent),
							r = document.createElement("a");
						function n(t) {
							var s = t;
							return (
								e && (r.setAttribute("href", s), (s = r.href)),
								r.setAttribute("href", s),
								{
									href: r.href,
									protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
									host: r.host,
									search: r.search ? r.search.replace(/^\?/, "") : "",
									hash: r.hash ? r.hash.replace(/^#/, "") : "",
									hostname: r.hostname,
									port: r.port,
									pathname:
										"/" === r.pathname.charAt(0)
											? r.pathname
											: "/" + r.pathname,
								}
							);
						}
						return (
							(t = n(window.location.href)),
							function (e) {
								var r = s.isString(e) ? n(e) : e;
								return r.protocol === t.protocol && r.host === t.host;
							}
						);
				  })()
				: function () {
						return !0;
				  };
		},
		function (t, e, r) {
			"use strict";
			var s = r(0),
				n = r(16),
				o = r(17),
				i = r(5),
				a = r(18),
				c = r(19),
				u = r(20).http,
				h = r(20).https,
				f = r(21),
				p = r(61),
				d = r(10).version,
				l = r(9),
				m = r(7),
				g = r(8),
				y = r(1),
				b = /https:?/;
			t.exports = function (t) {
				return new Promise(function (e, r) {
					var w;
					function v() {
						t.cancelToken && t.cancelToken.unsubscribe(w),
							t.signal && t.signal.removeEventListener("abort", w);
					}
					var C = function (t) {
							v(), e(t);
						},
						x = !1,
						E = function (t) {
							v(), (x = !0), r(t);
						},
						A = t.data,
						_ = t.headers,
						S = {};
					if (
						(Object.keys(_).forEach(function (t) {
							S[t.toLowerCase()] = t;
						}),
						"user-agent" in S
							? _[S["user-agent"]] || delete _[S["user-agent"]]
							: (_["User-Agent"] = "axios/" + d),
						A && !s.isStream(A))
					) {
						if (Buffer.isBuffer(A));
						else if (s.isArrayBuffer(A)) A = Buffer.from(new Uint8Array(A));
						else {
							if (!s.isString(A))
								return E(
									l(
										"Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
										t,
									),
								);
							A = Buffer.from(A, "utf-8");
						}
						if (t.maxBodyLength > -1 && A.length > t.maxBodyLength)
							return E(l("Request body larger than maxBodyLength limit", t));
						S["content-length"] || (_["Content-Length"] = A.length);
					}
					var T = void 0;
					t.auth &&
						(T = (t.auth.username || "") + ":" + (t.auth.password || ""));
					var O = o(t.baseURL, t.url),
						j = f.parse(O),
						R = j.protocol || "http:";
					if (!T && j.auth) {
						var k = j.auth.split(":");
						T = (k[0] || "") + ":" + (k[1] || "");
					}
					T && S.authorization && delete _[S.authorization];
					var D = b.test(R),
						P = D ? t.httpsAgent : t.httpAgent;
					try {
						i(j.path, t.params, t.paramsSerializer).replace(/^\?/, "");
					} catch (e) {
						var N = new Error(e.message);
						(N.config = t), (N.url = t.url), (N.exists = !0), E(N);
					}
					var B = {
						path: i(j.path, t.params, t.paramsSerializer).replace(/^\?/, ""),
						method: t.method.toUpperCase(),
						headers: _,
						agent: P,
						agents: { http: t.httpAgent, https: t.httpsAgent },
						auth: T,
					};
					t.socketPath
						? (B.socketPath = t.socketPath)
						: ((B.hostname = j.hostname), (B.port = j.port));
					var F,
						M = t.proxy;
					if (!M && !1 !== M) {
						var I = R.slice(0, -1) + "_proxy",
							L = process.env[I] || process.env[I.toUpperCase()];
						if (L) {
							var U = f.parse(L),
								q = process.env.no_proxy || process.env.NO_PROXY,
								W = !0;
							if (q)
								W = !q
									.split(",")
									.map(function (t) {
										return t.trim();
									})
									.some(function (t) {
										return (
											!!t &&
											("*" === t ||
												("." === t[0] &&
													j.hostname.substr(j.hostname.length - t.length) ===
														t) ||
												j.hostname === t)
										);
									});
							if (
								W &&
								((M = { host: U.hostname, port: U.port, protocol: U.protocol }),
								U.auth)
							) {
								var z = U.auth.split(":");
								M.auth = { username: z[0], password: z[1] };
							}
						}
					}
					M &&
						((B.headers.host = j.hostname + (j.port ? ":" + j.port : "")),
						(function t(e, r, s) {
							if (
								((e.hostname = r.host),
								(e.host = r.host),
								(e.port = r.port),
								(e.path = s),
								r.auth)
							) {
								var n = Buffer.from(
									r.auth.username + ":" + r.auth.password,
									"utf8",
								).toString("base64");
								e.headers["Proxy-Authorization"] = "Basic " + n;
							}
							e.beforeRedirect = function (e) {
								(e.headers.host = e.host), t(e, r, e.href);
							};
						})(
							B,
							M,
							R + "//" + j.hostname + (j.port ? ":" + j.port : "") + B.path,
						));
					var H = D && (!M || b.test(M.protocol));
					t.transport
						? (F = t.transport)
						: 0 === t.maxRedirects
						? (F = H ? c : a)
						: (t.maxRedirects && (B.maxRedirects = t.maxRedirects),
						  (F = H ? h : u)),
						t.maxBodyLength > -1 && (B.maxBodyLength = t.maxBodyLength),
						t.insecureHTTPParser &&
							(B.insecureHTTPParser = t.insecureHTTPParser);
					var $ = F.request(B, function (e) {
						if (!$.aborted) {
							var r = e,
								o = e.req || $;
							if (
								204 !== e.statusCode &&
								"HEAD" !== o.method &&
								!1 !== t.decompress
							)
								switch (e.headers["content-encoding"]) {
									case "gzip":
									case "compress":
									case "deflate":
										(r = r.pipe(p.createUnzip())),
											delete e.headers["content-encoding"];
								}
							var i = {
								status: e.statusCode,
								statusText: e.statusMessage,
								headers: e.headers,
								config: t,
								request: o,
							};
							if ("stream" === t.responseType) (i.data = r), n(C, E, i);
							else {
								var a = [],
									c = 0;
								r.on("data", function (e) {
									a.push(e),
										(c += e.length),
										t.maxContentLength > -1 &&
											c > t.maxContentLength &&
											((x = !0),
											r.destroy(),
											E(
												l(
													"maxContentLength size of " +
														t.maxContentLength +
														" exceeded",
													t,
													null,
													o,
												),
											));
								}),
									r.on("aborted", function () {
										x ||
											(r.destroy(),
											E(
												l("error request aborted", t, "ERR_REQUEST_ABORTED", o),
											));
									}),
									r.on("error", function (e) {
										$.aborted || E(m(e, t, null, o));
									}),
									r.on("end", function () {
										try {
											var e = 1 === a.length ? a[0] : Buffer.concat(a);
											"arraybuffer" !== t.responseType &&
												((e = e.toString(t.responseEncoding)),
												(t.responseEncoding && "utf8" !== t.responseEncoding) ||
													(e = s.stripBOM(e))),
												(i.data = e);
										} catch (e) {
											E(m(e, t, e.code, i.request, i));
										}
										n(C, E, i);
									});
							}
						}
					});
					if (
						($.on("error", function (e) {
							($.aborted && "ERR_FR_TOO_MANY_REDIRECTS" !== e.code) ||
								E(m(e, t, null, $));
						}),
						$.on("socket", function (t) {
							t.setKeepAlive(!0, 6e4);
						}),
						t.timeout)
					) {
						var G = parseInt(t.timeout, 10);
						if (isNaN(G))
							return void E(
								l(
									"error trying to parse `config.timeout` to int",
									t,
									"ERR_PARSE_TIMEOUT",
									$,
								),
							);
						$.setTimeout(G, function () {
							$.abort();
							var e = "";
							e = t.timeoutErrorMessage
								? t.timeoutErrorMessage
								: "timeout of " + t.timeout + "ms exceeded";
							var r = t.transitional || g;
							E(
								l(
									e,
									t,
									r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
									$,
								),
							);
						});
					}
					(t.cancelToken || t.signal) &&
						((w = function (t) {
							$.aborted ||
								($.abort(), E(!t || (t && t.type) ? new y("canceled") : t));
						}),
						t.cancelToken && t.cancelToken.subscribe(w),
						t.signal &&
							(t.signal.aborted ? w() : t.signal.addEventListener("abort", w))),
						s.isStream(A)
							? A.on("error", function (e) {
									E(m(e, t, null, $));
							  }).pipe($)
							: $.end(A);
				});
			};
		},
		function (t, e) {
			t.exports = require("stream");
		},
		function (t, e) {
			t.exports = require("assert");
		},
		function (t, e, r) {
			var s;
			t.exports = function () {
				if (!s) {
					try {
						s = r(52)("follow-redirects");
					} catch (t) {}
					"function" != typeof s && (s = function () {});
				}
				s.apply(null, arguments);
			};
		},
		function (t, e, r) {
			"undefined" == typeof process ||
			"renderer" === process.type ||
			!0 === process.browser ||
			process.__nwjs
				? (t.exports = r(53))
				: (t.exports = r(55));
		},
		function (t, e, r) {
			(e.formatArgs = function (e) {
				if (
					((e[0] =
						(this.useColors ? "%c" : "") +
						this.namespace +
						(this.useColors ? " %c" : " ") +
						e[0] +
						(this.useColors ? "%c " : " ") +
						"+" +
						t.exports.humanize(this.diff)),
					!this.useColors)
				)
					return;
				const r = "color: " + this.color;
				e.splice(1, 0, r, "color: inherit");
				let s = 0,
					n = 0;
				e[0].replace(/%[a-zA-Z%]/g, (t) => {
					"%%" !== t && (s++, "%c" === t && (n = s));
				}),
					e.splice(n, 0, r);
			}),
				(e.save = function (t) {
					try {
						t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
					} catch (t) {}
				}),
				(e.load = function () {
					let t;
					try {
						t = e.storage.getItem("debug");
					} catch (t) {}
					!t &&
						"undefined" != typeof process &&
						"env" in process &&
						(t = process.env.DEBUG);
					return t;
				}),
				(e.useColors = function () {
					if (
						"undefined" != typeof window &&
						window.process &&
						("renderer" === window.process.type || window.process.__nwjs)
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug ||
								(window.console.exception && window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					);
				}),
				(e.storage = (function () {
					try {
						return localStorage;
					} catch (t) {}
				})()),
				(e.destroy = (() => {
					let t = !1;
					return () => {
						t ||
							((t = !0),
							console.warn(
								"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
							));
					};
				})()),
				(e.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(e.log = console.debug || console.log || (() => {})),
				(t.exports = r(22)(e));
			const { formatters: s } = t.exports;
			s.j = function (t) {
				try {
					return JSON.stringify(t);
				} catch (t) {
					return "[UnexpectedJSONParseError]: " + t.message;
				}
			};
		},
		function (t, e) {
			var r = 1e3,
				s = 6e4,
				n = 60 * s,
				o = 24 * n;
			function i(t, e, r, s) {
				var n = e >= 1.5 * r;
				return Math.round(t / r) + " " + s + (n ? "s" : "");
			}
			t.exports = function (t, e) {
				e = e || {};
				var a = typeof t;
				if ("string" === a && t.length > 0)
					return (function (t) {
						if ((t = String(t)).length > 100) return;
						var e =
							/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
								t,
							);
						if (!e) return;
						var i = parseFloat(e[1]);
						switch ((e[2] || "ms").toLowerCase()) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return 315576e5 * i;
							case "weeks":
							case "week":
							case "w":
								return 6048e5 * i;
							case "days":
							case "day":
							case "d":
								return i * o;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return i * n;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return i * s;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return i * r;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return i;
							default:
								return;
						}
					})(t);
				if ("number" === a && isFinite(t))
					return e.long
						? (function (t) {
								var e = Math.abs(t);
								if (e >= o) return i(t, e, o, "day");
								if (e >= n) return i(t, e, n, "hour");
								if (e >= s) return i(t, e, s, "minute");
								if (e >= r) return i(t, e, r, "second");
								return t + " ms";
						  })(t)
						: (function (t) {
								var e = Math.abs(t);
								if (e >= o) return Math.round(t / o) + "d";
								if (e >= n) return Math.round(t / n) + "h";
								if (e >= s) return Math.round(t / s) + "m";
								if (e >= r) return Math.round(t / r) + "s";
								return t + "ms";
						  })(t);
				throw new Error(
					"val is not a non-empty string or a valid number. val=" +
						JSON.stringify(t),
				);
			};
		},
		function (t, e, r) {
			const s = r(56),
				n = r(57);
			(e.init = function (t) {
				t.inspectOpts = {};
				const r = Object.keys(e.inspectOpts);
				for (let s = 0; s < r.length; s++)
					t.inspectOpts[r[s]] = e.inspectOpts[r[s]];
			}),
				(e.log = function (...t) {
					return process.stderr.write(n.format(...t) + "\n");
				}),
				(e.formatArgs = function (r) {
					const { namespace: s, useColors: n } = this;
					if (n) {
						const e = this.color,
							n = "[3" + (e < 8 ? e : "8;5;" + e),
							o = `  ${n};1m${s} [0m`;
						(r[0] = o + r[0].split("\n").join("\n" + o)),
							r.push(n + "m+" + t.exports.humanize(this.diff) + "[0m");
					} else
						r[0] =
							(function () {
								if (e.inspectOpts.hideDate) return "";
								return new Date().toISOString() + " ";
							})() +
							s +
							" " +
							r[0];
				}),
				(e.save = function (t) {
					t ? (process.env.DEBUG = t) : delete process.env.DEBUG;
				}),
				(e.load = function () {
					return process.env.DEBUG;
				}),
				(e.useColors = function () {
					return "colors" in e.inspectOpts
						? Boolean(e.inspectOpts.colors)
						: s.isatty(process.stderr.fd);
				}),
				(e.destroy = n.deprecate(() => {},
				"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")),
				(e.colors = [6, 2, 3, 4, 5, 1]);
			try {
				const t = r(58);
				t &&
					(t.stderr || t).level >= 2 &&
					(e.colors = [
						20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
						63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
						113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
						166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
						197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
						214, 215, 220, 221,
					]);
			} catch (t) {}
			(e.inspectOpts = Object.keys(process.env)
				.filter((t) => /^debug_/i.test(t))
				.reduce((t, e) => {
					const r = e
						.substring(6)
						.toLowerCase()
						.replace(/_([a-z])/g, (t, e) => e.toUpperCase());
					let s = process.env[e];
					return (
						(s =
							!!/^(yes|on|true|enabled)$/i.test(s) ||
							(!/^(no|off|false|disabled)$/i.test(s) &&
								("null" === s ? null : Number(s)))),
						(t[r] = s),
						t
					);
				}, {})),
				(t.exports = r(22)(e));
			const { formatters: o } = t.exports;
			(o.o = function (t) {
				return (
					(this.inspectOpts.colors = this.useColors),
					n
						.inspect(t, this.inspectOpts)
						.split("\n")
						.map((t) => t.trim())
						.join(" ")
				);
			}),
				(o.O = function (t) {
					return (
						(this.inspectOpts.colors = this.useColors),
						n.inspect(t, this.inspectOpts)
					);
				});
		},
		function (t, e) {
			t.exports = require("tty");
		},
		function (t, e) {
			t.exports = require("util");
		},
		function (t, e, r) {
			"use strict";
			const s = r(59),
				n = r(60),
				o = process.env;
			let i;
			function a(t) {
				return (function (t) {
					return (
						0 !== t && {
							level: t,
							hasBasic: !0,
							has256: t >= 2,
							has16m: t >= 3,
						}
					);
				})(
					(function (t) {
						if (!1 === i) return 0;
						if (n("color=16m") || n("color=full") || n("color=truecolor"))
							return 3;
						if (n("color=256")) return 2;
						if (t && !t.isTTY && !0 !== i) return 0;
						const e = i ? 1 : 0;
						if ("win32" === process.platform) {
							const t = s.release().split(".");
							return Number(process.versions.node.split(".")[0]) >= 8 &&
								Number(t[0]) >= 10 &&
								Number(t[2]) >= 10586
								? Number(t[2]) >= 14931
									? 3
									: 2
								: 1;
						}
						if ("CI" in o)
							return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(
								(t) => t in o,
							) || "codeship" === o.CI_NAME
								? 1
								: e;
						if ("TEAMCITY_VERSION" in o)
							return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)
								? 1
								: 0;
						if ("truecolor" === o.COLORTERM) return 3;
						if ("TERM_PROGRAM" in o) {
							const t = parseInt(
								(o.TERM_PROGRAM_VERSION || "").split(".")[0],
								10,
							);
							switch (o.TERM_PROGRAM) {
								case "iTerm.app":
									return t >= 3 ? 3 : 2;
								case "Apple_Terminal":
									return 2;
							}
						}
						return /-256(color)?$/i.test(o.TERM)
							? 2
							: /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
									o.TERM,
							  ) || "COLORTERM" in o
							? 1
							: (o.TERM, e);
					})(t),
				);
			}
			n("no-color") || n("no-colors") || n("color=false")
				? (i = !1)
				: (n("color") || n("colors") || n("color=true") || n("color=always")) &&
				  (i = !0),
				"FORCE_COLOR" in o &&
					(i = 0 === o.FORCE_COLOR.length || 0 !== parseInt(o.FORCE_COLOR, 10)),
				(t.exports = {
					supportsColor: a,
					stdout: a(process.stdout),
					stderr: a(process.stderr),
				});
		},
		function (t, e) {
			t.exports = require("os");
		},
		function (t, e, r) {
			"use strict";
			t.exports = (t, e) => {
				e = e || process.argv;
				const r = t.startsWith("-") ? "" : 1 === t.length ? "-" : "--",
					s = e.indexOf(r + t),
					n = e.indexOf("--");
				return -1 !== s && (-1 === n || s < n);
			};
		},
		function (t, e) {
			t.exports = require("zlib");
		},
		function (t, e, r) {
			"use strict";
			var s = r(10).version,
				n = {};
			["object", "boolean", "number", "function", "string", "symbol"].forEach(
				function (t, e) {
					n[t] = function (r) {
						return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
					};
				},
			);
			var o = {};
			(n.transitional = function (t, e, r) {
				function n(t, e) {
					return (
						"[Axios v" +
						s +
						"] Transitional option '" +
						t +
						"'" +
						e +
						(r ? ". " + r : "")
					);
				}
				return function (r, s, i) {
					if (!1 === t)
						throw new Error(n(s, " has been removed" + (e ? " in " + e : "")));
					return (
						e &&
							!o[s] &&
							((o[s] = !0),
							console.warn(
								n(
									s,
									" has been deprecated since v" +
										e +
										" and will be removed in the near future",
								),
							)),
						!t || t(r, s, i)
					);
				};
			}),
				(t.exports = {
					assertOptions: function (t, e, r) {
						if ("object" != typeof t)
							throw new TypeError("options must be an object");
						for (var s = Object.keys(t), n = s.length; n-- > 0; ) {
							var o = s[n],
								i = e[o];
							if (i) {
								var a = t[o],
									c = void 0 === a || i(a, o, t);
								if (!0 !== c)
									throw new TypeError("option " + o + " must be " + c);
							} else if (!0 !== r) throw Error("Unknown option " + o);
						}
					},
					validators: n,
				});
		},
		function (t, e, r) {
			"use strict";
			var s = r(1);
			function n(t) {
				if ("function" != typeof t)
					throw new TypeError("executor must be a function.");
				var e;
				this.promise = new Promise(function (t) {
					e = t;
				});
				var r = this;
				this.promise.then(function (t) {
					if (r._listeners) {
						var e,
							s = r._listeners.length;
						for (e = 0; e < s; e++) r._listeners[e](t);
						r._listeners = null;
					}
				}),
					(this.promise.then = function (t) {
						var e,
							s = new Promise(function (t) {
								r.subscribe(t), (e = t);
							}).then(t);
						return (
							(s.cancel = function () {
								r.unsubscribe(e);
							}),
							s
						);
					}),
					t(function (t) {
						r.reason || ((r.reason = new s(t)), e(r.reason));
					});
			}
			(n.prototype.throwIfRequested = function () {
				if (this.reason) throw this.reason;
			}),
				(n.prototype.subscribe = function (t) {
					this.reason
						? t(this.reason)
						: this._listeners
						? this._listeners.push(t)
						: (this._listeners = [t]);
				}),
				(n.prototype.unsubscribe = function (t) {
					if (this._listeners) {
						var e = this._listeners.indexOf(t);
						-1 !== e && this._listeners.splice(e, 1);
					}
				}),
				(n.source = function () {
					var t;
					return {
						token: new n(function (e) {
							t = e;
						}),
						cancel: t,
					};
				}),
				(t.exports = n);
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				return function (e) {
					return t.apply(null, e);
				};
			};
		},
		function (t, e, r) {
			"use strict";
			var s = r(0);
			t.exports = function (t) {
				return s.isObject(t) && !0 === t.isAxiosError;
			};
		},
		function (t) {
			t.exports = JSON.parse(
				'{"name":"@sendgrid/client","description":"Twilio SendGrid NodeJS API client","version":"7.7.0","author":"Twilio SendGrid <help@twilio.com> (sendgrid.com)","contributors":["Kyle Partridge <kyle.partridge@sendgrid.com>","David Tomberlin <david.tomberlin@sendgrid.com>","Swift <swift@sendgrid.com>","Brandon West <brandon.west@sendgrid.com>","Scott Motte <scott.motte@sendgrid.com>","Robert Acosta <robert.acosta@sendgrid.com>","Elmer Thomas <ethomas@twilio.com>","Adam Reis <adam@reis.nz>"],"license":"MIT","homepage":"https://sendgrid.com","repository":{"type":"git","url":"git://github.com/sendgrid/sendgrid-nodejs.git"},"publishConfig":{"access":"public"},"main":"index.js","engines":{"node":"6.* || 8.* || >=10.*"},"dependencies":{"@sendgrid/helpers":"^7.7.0","axios":"^0.26.0"},"devDependencies":{"chai":"4.2.0","nock":"^10.0.6"},"resolutions":{"chai":"4.2.0"},"tags":["http","rest","api","mail","sendgrid"],"gitHead":"30eebb16a51b51e6a2df1b3596044db6f5fdbe92"}',
			);
		},
		function (t, e, r) {
			"use strict";
			const s = r(68),
				n = r(12),
				o = r(73),
				i = r(27),
				a = r(77),
				c = r(78),
				u = r(79);
			t.exports = {
				Attachment: s,
				EmailAddress: n,
				Mail: o,
				Personalization: i,
				Response: a,
				ResponseError: c,
				Statistics: u,
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(2),
				n = r(4),
				o = r(3),
				i = r(71),
				a = r(72);
			t.exports = class {
				constructor(t) {
					t && this.fromData(t);
				}
				fromData(t) {
					if ("object" != typeof t)
						throw new Error("Expecting object for Mail data");
					(t = o(t)), (t = s(t));
					const {
						content: e,
						filename: r,
						type: n,
						disposition: i,
						contentId: a,
						filePath: c,
					} = t;
					if (void 0 !== e && void 0 !== c)
						throw new Error(
							"The props 'content' and 'filePath' cannot be used together.",
						);
					this.setFilename(r),
						this.setType(n),
						this.setDisposition(i),
						this.setContentId(a),
						this.setContent(c ? this.readFile(c) : e);
				}
				readFile(t) {
					return i.readFileSync(a.resolve(t));
				}
				setContent(t) {
					if ("string" != typeof t) {
						if (t instanceof Buffer && void 0 !== t.toString)
							return (
								(this.content = t.toString()),
								void (
									"attachment" === this.disposition &&
									(this.content = t.toString("base64"))
								)
							);
						throw new Error("`content` expected to be either Buffer or string");
					}
					this.content = t;
				}
				setFileContent(t) {
					if (!(t instanceof Buffer && void 0 !== t.toString))
						throw new Error("`content` expected to be Buffer");
					this.content = t.toString("base64");
				}
				setFilename(t) {
					if (void 0 !== t) {
						if (t && "string" != typeof t)
							throw new Error("String expected for `filename`");
						this.filename = t;
					}
				}
				setType(t) {
					if (void 0 !== t) {
						if ("string" != typeof t)
							throw new Error("String expected for `type`");
						this.type = t;
					}
				}
				setDisposition(t) {
					if (void 0 !== t) {
						if ("string" != typeof t)
							throw new Error("String expected for `disposition`");
						this.disposition = t;
					}
				}
				setContentId(t) {
					if (void 0 !== t) {
						if ("string" != typeof t)
							throw new Error("String expected for `contentId`");
						this.contentId = t;
					}
				}
				toJSON() {
					const {
							content: t,
							filename: e,
							type: r,
							disposition: s,
							contentId: o,
						} = this,
						i = { content: t, filename: e };
					return (
						void 0 !== r && (i.type = r),
						void 0 !== s && (i.disposition = s),
						void 0 !== o && (i.contentId = o),
						n(i)
					);
				}
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				if ("string" != typeof t)
					throw new Error("String expected for conversion to snake case");
				return t
					.trim()
					.replace(/_+|\-+/g, " ")
					.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (t, e) {
						return 0 === Number(t)
							? ""
							: 0 === e
							? t.toLowerCase()
							: t.toUpperCase();
					});
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t) {
				if ("string" != typeof t)
					throw new Error("String expected for conversion to snake case");
				return t
					.trim()
					.replace(/(\s*\-*\b\w|[A-Z])/g, function (t) {
						return (
							("_" === (t = t.trim().toLowerCase().replace("-", ""))[0]
								? ""
								: "_") + t
						);
					})
					.slice(1);
			};
		},
		function (t, e) {
			t.exports = require("fs");
		},
		function (t, e) {
			t.exports = require("path");
		},
		function (t, e, r) {
			"use strict";
			const s = r(12),
				n = r(27),
				o = r(2),
				i = r(4),
				a = r(3),
				c = r(29),
				{ DYNAMIC_TEMPLATE_CHAR_WARNING: u } = r(75),
				{ validateMailSettings: h, validateTrackingSettings: f } = r(76);
			class p {
				constructor(t) {
					(this.isDynamic = !1),
						(this.hideWarnings = !1),
						(this.personalizations = []),
						(this.attachments = []),
						(this.content = []),
						(this.categories = []),
						(this.headers = {}),
						(this.sections = {}),
						(this.customArgs = {}),
						(this.trackingSettings = {}),
						(this.mailSettings = {}),
						(this.asm = {}),
						(this.substitutions = null),
						(this.substitutionWrappers = null),
						(this.dynamicTemplateData = null),
						t && this.fromData(t);
				}
				fromData(t) {
					if ("object" != typeof t)
						throw new Error("Expecting object for Mail data");
					(t = a(t)),
						(t = o(t, [
							"substitutions",
							"dynamicTemplateData",
							"customArgs",
							"headers",
							"sections",
						]));
					const {
						to: e,
						from: r,
						replyTo: s,
						cc: n,
						bcc: i,
						sendAt: c,
						subject: u,
						text: h,
						html: f,
						content: p,
						templateId: d,
						personalizations: l,
						attachments: m,
						ipPoolName: g,
						batchId: y,
						sections: b,
						headers: w,
						categories: v,
						category: C,
						customArgs: x,
						asm: E,
						mailSettings: A,
						trackingSettings: _,
						substitutions: S,
						substitutionWrappers: T,
						dynamicTemplateData: O,
						isMultiple: j,
						hideWarnings: R,
						replyToList: k,
					} = t;
					this.setFrom(r),
						this.setReplyTo(s),
						this.setSubject(u),
						this.setSendAt(c),
						this.setTemplateId(d),
						this.setBatchId(y),
						this.setIpPoolName(g),
						this.setAttachments(m),
						this.setContent(p),
						this.setSections(b),
						this.setHeaders(w),
						this.setCategories(C),
						this.setCategories(v),
						this.setCustomArgs(x),
						this.setAsm(E),
						this.setMailSettings(A),
						this.setTrackingSettings(_),
						this.setHideWarnings(R),
						this.setReplyToList(k),
						this.isDynamic
							? this.setDynamicTemplateData(O)
							: (this.setSubstitutions(S), this.setSubstitutionWrappers(T)),
						this.addTextContent(h),
						this.addHtmlContent(f),
						l
							? this.setPersonalizations(l)
							: j && Array.isArray(e)
							? e.forEach((t) => this.addTo(t, n, i))
							: this.addTo(e, n, i);
				}
				setFrom(t) {
					if (this._checkProperty("from", t, [this._checkUndefined])) {
						if ("string" != typeof t && "string" != typeof t.email)
							throw new Error("String or address object expected for `from`");
						this.from = s.create(t);
					}
				}
				setReplyTo(t) {
					if (this._checkProperty("replyTo", t, [this._checkUndefined])) {
						if ("string" != typeof t && "string" != typeof t.email)
							throw new Error(
								"String or address object expected for `replyTo`",
							);
						this.replyTo = s.create(t);
					}
				}
				setSubject(t) {
					this._setProperty("subject", t, "string");
				}
				setSendAt(t) {
					this._checkProperty("sendAt", t, [
						this._checkUndefined,
						this._createCheckThatThrows(
							Number.isInteger,
							"Integer expected for `sendAt`",
						),
					]) && (this.sendAt = t);
				}
				setTemplateId(t) {
					this._setProperty("templateId", t, "string") &&
						0 === t.indexOf("d-") &&
						(this.isDynamic = !0);
				}
				setBatchId(t) {
					this._setProperty("batchId", t, "string");
				}
				setIpPoolName(t) {
					this._setProperty("ipPoolName", t, "string");
				}
				setAsm(t) {
					if (
						this._checkProperty("asm", t, [
							this._checkUndefined,
							this._createTypeCheck("object"),
						])
					) {
						if ("number" != typeof t.groupId)
							throw new Error(
								"Expected `asm` to include an integer in its `groupId` field",
							);
						if (
							t.groupsToDisplay &&
							(!Array.isArray(t.groupsToDisplay) ||
								!t.groupsToDisplay.every((t) => "number" == typeof t))
						)
							throw new Error(
								"Array of integers expected for `asm.groupsToDisplay`",
							);
						this.asm = t;
					}
				}
				setPersonalizations(t) {
					if (this._doArrayCheck("personalizations", t)) {
						if (!t.every((t) => "object" == typeof t))
							throw new Error(
								"Array of objects expected for `personalizations`",
							);
						(this.personalizations = []),
							t.forEach((t) => this.addPersonalization(t));
					}
				}
				addPersonalization(t) {
					this.isDynamic && t.substitutions
						? delete t.substitutions
						: !this.isDynamic &&
						  t.dynamicTemplateData &&
						  delete t.dynamicTemplateData,
						t instanceof n || (t = new n(t)),
						this.isDynamic
							? this.applyDynamicTemplateData(t)
							: this.applySubstitutions(t),
						this.personalizations.push(t);
				}
				addTo(t, e, r) {
					if (void 0 === t && void 0 === e && void 0 === r)
						throw new Error("Provide at least one of to, cc or bcc");
					this.addPersonalization(new n({ to: t, cc: e, bcc: r }));
				}
				setSubstitutions(t) {
					this._setProperty("substitutions", t, "object");
				}
				setSubstitutionWrappers(t) {
					this._checkProperty("substitutionWrappers", t, [
						this._checkUndefined,
						(t, e) => {
							if (!Array.isArray(e) || 2 !== e.length)
								throw new Error(
									"Array expected with two elements for `" + t + "`",
								);
						},
					]) && (this.substitutionWrappers = t);
				}
				applySubstitutions(t) {
					t instanceof n &&
						(t.reverseMergeSubstitutions(this.substitutions),
						t.setSubstitutionWrappers(this.substitutionWrappers));
				}
				applyDynamicTemplateData(t) {
					t instanceof n &&
						t.deepMergeDynamicTemplateData(this.dynamicTemplateData);
				}
				setDynamicTemplateData(t) {
					if (void 0 !== t) {
						if ("object" != typeof t)
							throw new Error("Object expected for `dynamicTemplateData`");
						this.hideWarnings ||
							Object.values(t).forEach((t) => {
								/['"&]/.test(t) && console.warn(u);
							}),
							(this.dynamicTemplateData = t);
					}
				}
				setContent(t) {
					if (this._doArrayCheck("content", t)) {
						if (!t.every((t) => "object" == typeof t))
							throw new Error(
								"Expected each entry in `content` to be an object",
							);
						if (!t.every((t) => "string" == typeof t.type))
							throw new Error(
								"Expected each `content` entry to contain a `type` string",
							);
						if (!t.every((t) => "string" == typeof t.value))
							throw new Error(
								"Expected each `content` entry to contain a `value` string",
							);
						this.content = t;
					}
				}
				addContent(t) {
					this._checkProperty("content", t, [
						this._createTypeCheck("object"),
					]) && this.content.push(t);
				}
				addTextContent(t) {
					this._checkProperty("text", t, [
						this._checkUndefined,
						this._createTypeCheck("string"),
					]) && this.addContent({ value: t, type: "text/plain" });
				}
				addHtmlContent(t) {
					this._checkProperty("html", t, [
						this._checkUndefined,
						this._createTypeCheck("string"),
					]) && this.addContent({ value: t, type: "text/html" });
				}
				setAttachments(t) {
					if (this._doArrayCheck("attachments", t)) {
						if (!t.every((t) => "string" == typeof t.content))
							throw new Error(
								"Expected each attachment to contain a `content` string",
							);
						if (!t.every((t) => "string" == typeof t.filename))
							throw new Error(
								"Expected each attachment to contain a `filename` string",
							);
						if (!t.every((t) => !t.type || "string" == typeof t.type))
							throw new Error(
								"Expected the attachment's `type` field to be a string",
							);
						if (
							!t.every(
								(t) => !t.disposition || "string" == typeof t.disposition,
							)
						)
							throw new Error(
								"Expected the attachment's `disposition` field to be a string",
							);
						this.attachments = t;
					}
				}
				addAttachment(t) {
					this._checkProperty("attachment", t, [
						this._checkUndefined,
						this._createTypeCheck("object"),
					]) && this.attachments.push(t);
				}
				setCategories(t) {
					"string" == typeof t && (t = [t]),
						this._checkProperty("categories", t, [
							this._checkUndefined,
							(t, e) => {
								if (!Array.isArray(e) || !e.every((t) => "string" == typeof t))
									throw new Error("Array of strings expected for `" + t + "`");
							},
						]) && (this.categories = t);
				}
				addCategory(t) {
					this._checkProperty("category", t, [
						this._createTypeCheck("string"),
					]) && this.categories.push(t);
				}
				setHeaders(t) {
					this._setProperty("headers", t, "object");
				}
				addHeader(t, e) {
					this._checkProperty("key", t, [this._createTypeCheck("string")]) &&
						this._checkProperty("value", e, [
							this._createTypeCheck("string"),
						]) &&
						(this.headers[t] = e);
				}
				setSections(t) {
					this._setProperty("sections", t, "object");
				}
				setCustomArgs(t) {
					this._setProperty("customArgs", t, "object");
				}
				setTrackingSettings(t) {
					void 0 !== t && (f(t), (this.trackingSettings = t));
				}
				setMailSettings(t) {
					void 0 !== t && (h(t), (this.mailSettings = t));
				}
				setHideWarnings(t) {
					if (void 0 !== t) {
						if ("boolean" != typeof t)
							throw new Error("Boolean expected for `hideWarnings`");
						this.hideWarnings = t;
					}
				}
				toJSON() {
					const {
							from: t,
							replyTo: e,
							sendAt: r,
							subject: s,
							content: n,
							templateId: o,
							personalizations: a,
							attachments: u,
							ipPoolName: h,
							batchId: f,
							asm: p,
							sections: d,
							headers: l,
							categories: m,
							customArgs: g,
							mailSettings: y,
							trackingSettings: b,
							replyToList: w,
						} = this,
						v = { from: t, subject: s, personalizations: c(a) };
					return (
						Array.isArray(u) && u.length > 0 && (v.attachments = c(u)),
						Array.isArray(m) &&
							m.length > 0 &&
							(v.categories = m.filter((t) => "" !== t)),
						Array.isArray(n) && n.length > 0 && (v.content = c(n)),
						Object.keys(l).length > 0 && (v.headers = l),
						Object.keys(y).length > 0 && (v.mailSettings = y),
						Object.keys(b).length > 0 && (v.trackingSettings = b),
						Object.keys(g).length > 0 && (v.customArgs = g),
						Object.keys(d).length > 0 && (v.sections = d),
						Object.keys(p).length > 0 && (v.asm = p),
						void 0 !== e && (v.replyTo = e),
						void 0 !== r && (v.sendAt = r),
						void 0 !== f && (v.batchId = f),
						void 0 !== o && (v.templateId = o),
						void 0 !== h && (v.ipPoolName = h),
						void 0 !== w && (v.replyToList = w),
						i(v, [
							"substitutions",
							"dynamicTemplateData",
							"customArgs",
							"headers",
							"sections",
						])
					);
				}
				static create(t) {
					return Array.isArray(t)
						? t.filter((t) => !!t).map((t) => this.create(t))
						: t instanceof p
						? t
						: new p(t);
				}
				_checkProperty(t, e, r) {
					return !r.some((r) => r(t, e));
				}
				_setProperty(t, e, r) {
					let s = this._checkProperty(t, e, [
						this._checkUndefined,
						this._createTypeCheck(r),
					]);
					return s && (this[t] = e), s;
				}
				_checkUndefined(t, e) {
					return void 0 === e;
				}
				_createTypeCheck(t) {
					return (e, r) => {
						if (typeof r !== t)
							throw new Error(t + " expected for `" + e + "`");
					};
				}
				_createCheckThatThrows(t, e) {
					return (r, s) => {
						if (!t(s)) throw new Error(e);
					};
				}
				_setArrayProperty(t, e) {
					this._doArrayCheck(t, e) && (this[t] = e);
				}
				_doArrayCheck(t, e) {
					return this._checkProperty(t, e, [
						this._checkUndefined,
						this._createCheckThatThrows(
							Array.isArray,
							"Array expected for`" + t + "`",
						),
					]);
				}
				setReplyToList(t) {
					if (this._doArrayCheck("replyToList", t) && t.length) {
						if (!t.every((t) => t && "string" == typeof t.email))
							throw new Error(
								"Expected each replyTo to contain an `email` string",
							);
						this.replyToList = t;
					}
				}
			}
			t.exports = p;
		},
		function (t, e, r) {
			"use strict";
			var s = function (t) {
				return (
					(function (t) {
						return !!t && "object" == typeof t;
					})(t) &&
					!(function (t) {
						var e = Object.prototype.toString.call(t);
						return (
							"[object RegExp]" === e ||
							"[object Date]" === e ||
							(function (t) {
								return t.$$typeof === n;
							})(t)
						);
					})(t)
				);
			};
			var n =
				"function" == typeof Symbol && Symbol.for
					? Symbol.for("react.element")
					: 60103;
			function o(t, e) {
				return !1 !== e.clone && e.isMergeableObject(t)
					? h(((r = t), Array.isArray(r) ? [] : {}), t, e)
					: t;
				var r;
			}
			function i(t, e, r) {
				return t.concat(e).map(function (t) {
					return o(t, r);
				});
			}
			function a(t) {
				return Object.keys(t).concat(
					(function (t) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(t).filter(function (e) {
									return Object.propertyIsEnumerable.call(t, e);
							  })
							: [];
					})(t),
				);
			}
			function c(t, e) {
				try {
					return e in t;
				} catch (t) {
					return !1;
				}
			}
			function u(t, e, r) {
				var s = {};
				return (
					r.isMergeableObject(t) &&
						a(t).forEach(function (e) {
							s[e] = o(t[e], r);
						}),
					a(e).forEach(function (n) {
						(function (t, e) {
							return (
								c(t, e) &&
								!(
									Object.hasOwnProperty.call(t, e) &&
									Object.propertyIsEnumerable.call(t, e)
								)
							);
						})(t, n) ||
							(c(t, n) && r.isMergeableObject(e[n])
								? (s[n] = (function (t, e) {
										if (!e.customMerge) return h;
										var r = e.customMerge(t);
										return "function" == typeof r ? r : h;
								  })(n, r)(t[n], e[n], r))
								: (s[n] = o(e[n], r)));
					}),
					s
				);
			}
			function h(t, e, r) {
				((r = r || {}).arrayMerge = r.arrayMerge || i),
					(r.isMergeableObject = r.isMergeableObject || s),
					(r.cloneUnlessOtherwiseSpecified = o);
				var n = Array.isArray(e);
				return n === Array.isArray(t)
					? n
						? r.arrayMerge(t, e, r)
						: u(t, e, r)
					: o(e, r);
			}
			h.all = function (t, e) {
				if (!Array.isArray(t))
					throw new Error("first argument should be an array");
				return t.reduce(function (t, r) {
					return h(t, r, e);
				}, {});
			};
			var f = h;
			t.exports = f;
		},
		function (t, e) {
			t.exports = {
				DYNAMIC_TEMPLATE_CHAR_WARNING:
					"\nContent with characters ', \" or & may need to be escaped with three brackets\n{{{ content }}}\nSee https://sendgrid.com/docs/for-developers/sending-email/using-handlebars/ for more information.",
			};
		},
		function (t, e, r) {
			"use strict";
			const s = (t, e, r, s) => {
				if (void 0 !== t && void 0 !== t[r] && typeof t[r] !== s)
					throw new Error(`${s} expected for \`${e}.${r}\``);
			};
			t.exports = {
				validateMailSettings(t) {
					if ("object" != typeof t)
						throw new Error("Object expected for `mailSettings`");
					const {
						bcc: e,
						bypassListManagement: r,
						bypassSpamManagement: n,
						bypassBounceManagement: o,
						bypassUnsubscribeManagement: i,
						footer: a,
						sandboxMode: c,
						spamCheck: u,
					} = t;
					s(e, "bcc", "enable", "boolean"),
						s(e, "bcc", "email", "string"),
						s(r, "bypassListManagement", "enable", "boolean"),
						s(n, "bypassSpamManagement", "enable", "boolean"),
						s(o, "bypassBounceManagement", "enable", "boolean"),
						s(i, "bypassUnsubscribeManagement", "enable", "boolean"),
						s(a, "footer", "enable", "boolean"),
						s(a, "footer", "text", "string"),
						s(a, "footer", "html", "string"),
						s(c, "sandboxMode", "enable", "boolean"),
						s(u, "spamCheck", "enable", "boolean"),
						s(u, "spamCheck", "threshold", "number"),
						s(u, "spamCheck", "postToUrl", "string");
				},
				validateTrackingSettings(t) {
					if ("object" != typeof t)
						throw new Error("Object expected for `trackingSettings`");
					const {
						clickTracking: e,
						openTracking: r,
						subscriptionTracking: n,
						ganalytics: o,
					} = t;
					s(e, "clickTracking", "enable", "boolean"),
						s(e, "clickTracking", "enableText", "boolean"),
						s(r, "openTracking", "enable", "boolean"),
						s(r, "openTracking", "substitutionTag", "string"),
						s(n, "subscriptionTracking", "enable", "boolean"),
						s(n, "subscriptionTracking", "text", "string"),
						s(n, "subscriptionTracking", "html", "string"),
						s(n, "subscriptionTracking", "substitutionTag", "string"),
						s(o, "ganalytics", "enable", "boolean"),
						s(o, "ganalytics", "utm_source", "string"),
						s(o, "ganalytics", "utm_medium", "string"),
						s(o, "ganalytics", "utm_term", "string"),
						s(o, "ganalytics", "utm_content", "string"),
						s(o, "ganalytics", "utm_campaign", "string");
				},
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = class {
				constructor(t, e, r) {
					(this.statusCode = t), (this.body = e), (this.headers = r);
				}
				toString() {
					return "HTTP " + this.statusCode + " " + this.body;
				}
			};
		},
		function (t, e, r) {
			"use strict";
			class s extends Error {
				constructor(t) {
					super();
					const { headers: e, status: r, statusText: s, data: n } = t;
					(this.code = r),
						(this.message = s),
						(this.response = { headers: e, body: n }),
						this.stack || Error.captureStackTrace(this, this.constructor);
					const o = new RegExp(process.cwd() + "/", "gi");
					this.stack = this.stack.replace(o, "");
				}
				toString() {
					const { body: t } = this.response;
					let e = `${this.message} (${this.code})`;
					return (
						t &&
							Array.isArray(t.errors) &&
							t.errors.forEach((t) => {
								const r = t.message,
									s = t.field,
									n = t.help;
								e += `\n  ${r}\n    ${s}\n    ${n}`;
							}),
						e
					);
				}
				toJSON() {
					const { message: t, code: e, response: r } = this;
					return { message: t, code: e, response: r };
				}
			}
			t.exports = s;
		},
		function (t, e, r) {
			"use strict";
			const s = r(2),
				n = r(3),
				o = ["day", "week", "month"],
				i = ["us", "ca"],
				a = ["desc", "asc"];
			t.exports = class {
				constructor(t) {
					(this.startDate = null),
						(this.endDate = null),
						(this.aggregatedBy = null),
						t && this.fromData(t);
				}
				fromData(t) {
					if ("object" != typeof t)
						throw new Error("Expecting object for Statistics data");
					(t = n(t)), (t = s(t, ["substitutions", "customArgs"]));
					const { startDate: e, endDate: r, aggregatedBy: o } = t;
					this.setStartDate(e), this.setEndDate(r), this.setAggregatedBy(o);
				}
				setStartDate(t) {
					if (void 0 === t) throw new Error("Date expected for `startDate`");
					if ("Invalid Date" === new Date(t) || isNaN(new Date(t)))
						throw new Error("Date expected for `startDate`");
					console.log(t),
						(this.startDate = new Date(t).toISOString().slice(0, 10));
				}
				setEndDate(t) {
					if (void 0 !== t) {
						if ("Invalid Date" === new Date(t) || isNaN(new Date(t)))
							throw new Error("Date expected for `endDate`");
						this.endDate = new Date(t).toISOString().slice(0, 10);
					} else this.endDate = new Date().toISOString().slice(0, 10);
				}
				setAggregatedBy(t) {
					if (void 0 !== t) {
						if ("string" != typeof t || !o.includes(t.toLowerCase()))
							throw new Error("Incorrect value for `aggregatedBy`");
						this.aggregatedBy = t;
					}
				}
				getGlobal() {
					const { startDate: t, endDate: e, aggregatedBy: r } = this;
					return { startDate: t, endDate: e, aggregatedBy: r };
				}
				getAdvanced(t) {
					const e = this.getGlobal();
					return (
						void 0 === t ||
							("string" == typeof t &&
								i.includes(t.toLowerCase()) &&
								(e.country = t)),
						e
					);
				}
				getAdvancedMailboxProviders(t) {
					const e = this.getGlobal();
					if (void 0 === t) return e;
					if (Array.isArray(t) && t.some((t) => "string" != typeof t))
						throw new Error("Array of strings expected for `mailboxProviders`");
					return (e.mailBoxProviders = t), e;
				}
				getAdvancedBrowsers(t) {
					const e = this.getGlobal();
					if (void 0 === t) return e;
					if (Array.isArray(t) && t.some((t) => "string" != typeof t))
						throw new Error("Array of strings expected for `browsers`");
					return (e.browsers = t), e;
				}
				getCategories(t) {
					if (void 0 === t)
						throw new Error("Array of strings expected for `categories`");
					if (!this._isValidArrayOfStrings(t))
						throw new Error("Array of strings expected for `categories`");
					const e = this.getGlobal();
					return (e.categories = t), e;
				}
				getSubuser(t) {
					if (void 0 === t)
						throw new Error("Array of strings expected for `subusers`");
					if (!this._isValidArrayOfStrings(t))
						throw new Error("Array of strings expected for `subusers`");
					const e = this.getGlobal();
					return (e.subusers = t), e;
				}
				getSubuserSum(t = "delivered", e = a[0], r = 5, s = 0) {
					if ("string" != typeof t)
						throw new Error("string expected for `sortByMetric`");
					if (!a.includes(e.toLowerCase()))
						throw new Error("desc or asc expected for `sortByDirection`");
					if ("number" != typeof r)
						throw new Error("number expected for `limit`");
					if ("number" != typeof s)
						throw new Error("number expected for `offset`");
					const n = this.getGlobal();
					return (
						(n.sortByMetric = t),
						(n.sortByDirection = e),
						(n.limit = r),
						(n.offset = s),
						n
					);
				}
				getSubuserMonthly(t = "delivered", e = a[0], r = 5, s = 0) {
					if ("string" != typeof t)
						throw new Error("string expected for `sortByMetric`");
					if (!a.includes(e.toLowerCase()))
						throw new Error("desc or asc expected for `sortByDirection`");
					if ("number" != typeof r)
						throw new Error("number expected for `limit`");
					if ("number" != typeof s)
						throw new Error("number expected for `offset`");
					const n = this.getGlobal();
					return (
						(n.sortByMetric = t),
						(n.sortByDirection = e),
						(n.limit = r),
						(n.offset = s),
						n
					);
				}
				_isValidArrayOfStrings(t) {
					return (
						!!Array.isArray(t) &&
						!(t.length < 1 || t.some((t) => "string" != typeof t))
					);
				}
			};
		},
		function (t, e, r) {
			"use strict";
			const s = r(29),
				n = r(11),
				o = r(3),
				i = r(81),
				a = r(26),
				c = r(2),
				u = r(4),
				h = r(28);
			t.exports = {
				arrayToJSON: s,
				convertKeys: n,
				deepClone: o,
				mergeData: i,
				splitNameEmail: a,
				toCamelCase: c,
				toSnakeCase: u,
				wrapSubstitutions: h,
			};
		},
		function (t, e, r) {
			"use strict";
			t.exports = function (t, e) {
				if ("object" != typeof t || null === t)
					throw new Error("Not an object provided for base");
				if ("object" != typeof e || null === e)
					throw new Error("Not an object provided for data");
				const r = Object.assign({}, t);
				for (const t in e)
					e.hasOwnProperty(t) &&
						(e[t] && Array.isArray(e[t])
							? (r[t] = e[t])
							: e[t] && "object" == typeof e[t]
							? (r[t] = Object.assign({}, e[t]))
							: e[t] && (r[t] = e[t]));
				return r;
			};
		},
	]),
);
