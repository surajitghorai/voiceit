/*! For license information please see main.ed5c7337.chunk.js.LICENSE.txt */
(this.webpackJsonpvideowhisper = this.webpackJsonpvideowhisper || []).push([
    [0], {
        311: function(e, t, a) {
            e.exports = a(543)
        },
        316: function(e, t, a) {},
        321: function(e, t, a) {},
        540: function(e, t, a) {},
        541: function(e, t, a) {},
        542: function(e, t, a) {},
        543: function(e, t, a) {
            "use strict";
            a.r(t);
            var o = a(0),
                n = a.n(o),
                i = a(40),
                s = a.n(i),
                r = (a(316), a(129)),
                c = a(71),
                l = a(132),
                d = {
                    user: {
                        ID: 0,
                        sessionID: 0,
                        sessionKey: "",
                        name: "User.0",
                        loggedIn: !1,
                        warning: "Please wait for login..",
                        balance: 0
                    },
                    room: {
                        ID: 0,
                        name: "Room.0",
                        screen: "LoginScreen",
                        streamBroadcast: "Room",
                        streamPlayback: "Room",
                        privateUID: 0,
                        actionPrivate: !1,
                        actionPrivateClose: !1,
                        actionID: 0,
                        performer: "",
                        performerID: 0,
                        welcome: "Welcome to default room!"
                    },
                    config: {
                        wss: "",
                        application: "",
                        videoCodec: "h264",
                        videoBitrate: "400",
                        videoFramerae: "29.97",
                        audioCodec: "opus",
                        audioBitrate: "64",
                        autoBroadcast: !1,
                        exitURL: "https://videowhisper.com",
                        errorURL: "https://videowhisper.com/tickets_submit.php",
                        actionFullpage: !1,
                        actionFullscreen: !0,
                        loaded: !1
                    },
                    messages: [],
                    actions: [],
                    lastMessageTimestamp: 0
                };
            var p = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    switch (a.type) {
                        case "App/UPDATE_USER":
                            e = Object.assign({}, t, {
                                user: Object.assign({}, t.user, a.payload.user)
                            });
                            break;
                        case "App/SET_ROOM":
                            e = Object.assign({}, t, {
                                room: Object.assign({}, a.payload.room)
                            });
                            break;
                        case "App/UPDATE_ROOM":
                            e = Object.assign({}, t, {
                                room: Object.assign({}, t.room, a.payload.room)
                            });
                            break;
                        case "App/SET_CONFIG":
                            e = Object.assign({}, t, {
                                config: Object.assign({}, a.payload.config)
                            });
                            break;
                        case "App/ADD_MESSAGE":
                            e = Object.assign({}, t, {
                                messages: [].concat(Object(l.a)(t.messages), [a.payload.message])
                            });
                            break;
                        case "App/ADD_HISTORY":
                            e = Object.assign({}, t, {
                                lastMessageTimestamp: a.payload.timestamp,
                                messages: t.messages.concat(a.payload.messages)
                            });
                            break;
                        case "App/SET_ACTIONS":
                            e = Object.assign({}, t, {
                                lastMessageTimestamp: a.payload.timestamp,
                                actions: Object(l.a)(a.payload.actions)
                            });
                            break;
                        case "App/SET_HISTORY":
                            e = Object.assign({}, t, {
                                lastMessageTimestamp: a.payload.timestamp,
                                messages: Object(l.a)(a.payload.messages)
                            });
                            break;
                        default:
                            e = Object.assign({}, t)
                    }
                    return e
                },
                m = Object(c.b)({
                    app: p
                }),
                u = Object(c.c)(m),
                h = a(8),
                v = a(9),
                g = a(18),
                f = a(11),
                S = a(10);
            var b = a(544),
                y = a(63),
                k = a(556),
                E = a(561),
                C = (a(321), a(560)),
                M = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return e in t.config.text ? t.config.text[e] : e
                        }, o.devMode = e.appState.devMode, o.state = {
                            loggedin: !1,
                            modeServers: ["videowhisper", "videowhispers", "ateom"]
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = this.state;
                            if (this.devMode && console.log("VideoWhisper/containers/LoginScreen componentDidMount", e.appState.parametersRetrieved, e.appState.checkWait, e, t, window, window.VideoWhisper), !t.loggedin && e.appState.parametersRetrieved && !e.user.loggedIn && !e.user.failed && !e.appState.checkWait) {
                                var a = window.VideoWhisper;
                                e.serverUpdate({
                                    task: "login",
                                    VideoWhisper: a
                                }), this.state.loggedin = !0
                            }
                            this.devMode ? setTimeout((function() {
                                return t.modeServers.forEach(e.checkMode)
                            }), 3e3) : t.modeServers.forEach(e.checkMode)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t, a) {
                            if (this.devMode && console.log("VideoWhisper/containers/LoginScreen componentDidUpdate parametersRetrieved checkWait loggedin", e.appState.parametersRetrieved, e.appState.checkWait, t.loggedin), !t.loggedin && e.appState.parametersRetrieved && !e.user.loggedIn && !e.user.failed && !e.appState.checkWait) {
                                var o = window.VideoWhisper;
                                e.serverUpdate({
                                    task: "login",
                                    VideoWhisper: o
                                }), this.state.loggedin = !0
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props;
                            this.state;
                            e = t.user.loggedIn ? "Logged in as " + t.user.name : "Not logged in, yet. ", t.user.warning && (e += t.user.warning);
                            var a = n.a.createElement("p", null, " Entering the ", n.a.createElement("a", {
                                href: "https://videowhisper.com"
                            }, "VideoWhisper.com"), " HTML5 Videochat App");
                            return (t.appState.whitelabel || !t.appState.parametersRetrieved && !t.appState.error) && (a = n.a.createElement("p", null, "Entering Videochat")), t.appState.checked && (t.appState.mode.status || (a = t.appState.mode.text ? t.appState.mode.text : "This is server connection screen."), t.appState.whitelabel && t.appState.whitelabel != t.appState.mode.whitelabel && (a = n.a.createElement("p", null, "Whitelabel license required to start ", n.a.createElement("a", {
                                href: "https://videowhisper.com"
                            }, "VideoWhisper.com"), " HTML5 Videochat application in whitelabel mode.", n.a.createElement("br", null), n.a.createElement("a", {
                                href: "https://videowhisper.com/tickets_submit.php"
                            }, "Contact Support"), " for details!"))), n.a.createElement(C.a, {
                                className: t.appState.className
                            }, n.a.createElement("p", null, " Logged in: ", e, " "), n.a.createElement("p", null, " ", t.user.error, " "), a)
                        }
                    }]), a
                }(o.Component),
                R = a(55),
                x = a(31),
                w = a(555),
                U = a(93),
                I = a(557),
                D = a(2),
                O = a.n(D),
                N = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return e in t.config.text ? t.config.text[e] : e
                        }, o.updateSize = function() {
                            var e = Object(g.a)(o).state;
                            if (e.container) {
                                var t = e.container.clientWidth,
                                    a = e.container.clientHeight;
                                a || (a = 1);
                                var n = t / a;
                                o.setState({
                                    aspectRatio: n,
                                    width: t,
                                    height: a
                                })
                            }
                            o.devMode && console.log("components/Panel containerResized", e)
                        }, o.state = {
                            container: null,
                            width: 0,
                            height: 0,
                            aspectRatio: 0,
                            settingsActive: !0
                        }, o.devMode = e.appState.devMode, o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateSize(), window.addEventListener("resize", this.updateSize, !1), document.addEventListener("onfullscreenchange", this.updateSize, !1), document.addEventListener("webkitfullscreenchange", this.updateSize, !1), document.addEventListener("mozfullscreenchange", this.updateSize, !1), document.addEventListener("msfullscreenchange", this.updateSize, !1), document.addEventListener("MSFullscreenChange", this.updateSize, !1), document.addEventListener("fullscreenchange", this.updateSize, !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.updateSize), document.removeEventListener("onfullscreenchange", this.updateSize), document.removeEventListener("webkitfullscreenchange", this.updateSize), document.removeEventListener("mozfullscreenchange", this.updateSize), document.removeEventListener("msfullscreenchange", this.updateSize), document.removeEventListener("MSFullscreenChange", this.updateSize), document.removeEventListener("fullscreenchange", this.updateSize)
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var a = t.name,
                                o = t.value,
                                n = this.state;
                            "settings" === a && this.setState((function(e) {
                                return {
                                    settingsActive: !n.settingsActive
                                }
                            })), this.devMode && console.log("components/Panel onClick ", a, o, e, n)
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if (t.container) {
                                var a = t.container.clientWidth,
                                    o = t.container.clientHeight;
                                if (o || (o = 1), t.width !== a || t.height !== o) {
                                    var n = {
                                        aspectRatio: a / o,
                                        width: a,
                                        height: o
                                    };
                                    return e.appState.devMode && console.log("components/Panel getDerivedStateFromProps size update", n, t), n
                                }
                            }
                            return null
                        }
                    }]), a
                }(o.Component),
                A = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e))._isMounted = !1, o.bitrateOptions = function(e) {
                            var t = [];
                            t.push({
                                key: "bitrate-title",
                                text: n.a.createElement("span", null, n.a.createElement("strong", null, "Video Bitrate"), " ", o.state.maxBitrate ? " <" + o.state.maxBitrate + "kbps" : ""),
                                disabled: !0
                            });
                            var a = o.state.maxBitrate,
                                i = !1;
                            return [{
                                value: .35,
                                label: "Very Low"
                            }, {
                                value: .5,
                                label: "Low"
                            }, {
                                value: .75,
                                label: "Medium"
                            }, {
                                value: 1,
                                label: "Good"
                            }, {
                                value: 1.25,
                                label: "High"
                            }, {
                                value: 1.5,
                                label: "Very High"
                            }].forEach((function(o) {
                                var n = Math.round(o.value * e);
                                n === a && (i = !0), n <= a && t.push({
                                    key: n,
                                    value: n,
                                    text: n + " kbps " + o.label
                                })
                            })), (0 === t.length || !i && 1.5 * e > a) && t.push({
                                key: a,
                                value: a,
                                text: a + " kbps Limit"
                            }), t
                        }, o.onopen = function(e) {
                            var t = this;
                            if (this.devMode && console.log("components/Camera wsConnection.onopen ", this.wsConnection.readyState, e, this.state), this.wsMessaged = !1, this.props.appStateUpdate({
                                    wsOpen: !0,
                                    wsComponent: "Camera onopen"
                                }), 1 == this.wsConnection.readyState) {
                                if (this.peerConnection = new RTCPeerConnection(this.peerConnectionConfig), this.peerConnection.onicecandidate = this.onicecandidate, this.peerConnection.onsignalingstatechange = this.onsignalingstatechange.bind(this), this.peerConnection.oniceconnectionstatechange = this.oniceconnectionstatechange.bind(this), this.localStream.getAudioTracks().forEach((function(e) {
                                        return t.peerConnection.addTrack(e, t.localStream)
                                    })), !this.audioInterface) this.localStream.getVideoTracks().forEach((function(e) {
                                    return t.peerConnection.addTrack(e, t.localStream)
                                }));
                                this.peerConnection.createOffer(this.offerOptions).then(this.gotDescription.bind(this), this.errorHandler), this.devMode && console.log("components/Camera wsConnection.onopen setting wsMessagedCheck"), setTimeout((function() {
                                    return t.wsMessagedCheck()
                                }), 6e3)
                            }
                        }, o.wsMessagedCheck = function() {
                            o.devMode && console.log("components/Camera wsConnection wsMessagedCheck", o.wsMessaged), o.wsMessaged || (o.setState({
                                buttonDisabled: !1,
                                buttonContent: o.txt("Broadcast"),
                                statusInfo: "Websocked did not reply"
                            }), console.log("components/Camera wsMessagedCheck", "Websocked did not reply with ice candidates", o.wsConnection), o.retryIfTimeoutSet || o.retryIfTimeout())
                        }, o.onmessage = function(e) {
                            o.wsMessaged = !0, o.devMode && console.log("components/Camera wsConnection.onmessage", e);
                            var t = JSON.parse(e.data),
                                a = Number(t.status);
                            t.command;
                            if (200 != a) console.log("components/Camera wsConnection.onmessage error sdp:", t.statusDescription), o.stopPublisher(), o.setState({
                                buttonDisabled: !1,
                                buttonContent: o.txt("Broadcast"),
                                statusInfo: t.statusDescription,
                                connecting: !1,
                                connected: !1
                            }), o.props.appStateUpdate({
                                cameraStatus: "error"
                            }), o.retriesLeft = 0;
                            else {
                                var n = t.sdp;
                                void 0 !== n && (o.devMode && console.log("components/Camera wsConnection.onmessage 200 sdp:", t.sdp), o.peerConnection.setRemoteDescription(n).then((function() {})).catch(o.errorHandler.bind(Object(g.a)(o))));
                                var i = t.iceCandidates;
                                if (o.devMode && console.log("components/Camera wsConnection msgJSON iceCandidates: ", i), void 0 !== i) {
                                    for (var s in i) o.devMode && console.log("components/Camera wsConnection iceCandidate: " + i[s]), o.peerConnection.addIceCandidate(new RTCIceCandidate(i[s])).then((function() {
                                        return o.onAddIceCandidateSuccess(o.peerConnection)
                                    }), (function(e) {
                                        return o.onAddIceCandidateError(o.peerConnection, e)
                                    }));
                                    null != o.wsConnection && o.wsConnection.close()
                                }
                            }
                        }, o.setMediaBitrateSDP = function(e, t, a) {
                            var n = "AS",
                                i = !1;
                            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (i = !0), i && (a = 1e3 * (a >>> 0), n = "TIAS"), a = Math.round(a);
                            for (var s = e.split("\n"), r = -1, c = 0; c < s.length; c++)
                                if (0 === s[c].indexOf("m=" + t)) {
                                    r = c;
                                    break
                                } if (-1 === r) return e;
                            for (r++; 0 === s[r].indexOf("i=") || 0 === s[r].indexOf("c=");) r++;
                            if (0 === s[r].indexOf("b")) return s[r] = "b=" + n + ":" + a, s.join("\n");
                            var l = s.slice(0, r);
                            return l.push("b=" + n + ":" + a), l = l.concat(s.slice(r, s.length)), o.devMode && console.log("components/Camera setMediaBitrateSDP", t, a, l.join("\n")), l.join("\n")
                        }, o.devMode = e.appState.devMode, o.devMode && console.log("components/Camera constructor", e), o.audioInterface = !1, e.cameraConfig && (o.audioInterface = e.cameraConfig.audioInterface), o.tChecked = !1, o.retriesLeft = 5, o.retryTimeout = 5500, o.retryIfTimeoutSet = !1, o.wsConnection = null, o.peerConnection = null, o.peerConnectionConfig = {
                            iceServers: [],
                            optional: [{
                                googSuspendBelowMinBitrate: !1,
                                googImprovedWifiBwe: !0
                            }]
                        }, o.localStream = null, o.streamInfo = null, o.userData = null, o.SDPOutput = {}, o.offerOptions = {
                            offerToReceiveAudio: 1,
                            offerToReceiveVideo: 1
                        }, o.localVideo = n.a.createRef(), o.stats = {
                            video: {
                                timestamp: 0,
                                bandwidth: 0
                            },
                            audio: {
                                timestamp: 0,
                                bandwidth: 0
                            }
                        }, o.videoIndex = -1, o.audioIndex = -1, o.changedBy = "", o.enhanceData = {}, o.tWarn = "", o.resolutions = {
                            "4K": {
                                label: "4K",
                                width: 3840,
                                height: 2160,
                                ratio: "16:9",
                                bitrate: 12e3
                            },
                            "1440p": {
                                label: "1440p",
                                width: 2560,
                                height: 1440,
                                ratio: "16:9",
                                bitrate: 6e3
                            },
                            "1080p": {
                                label: "1080p",
                                width: 1920,
                                height: 1080,
                                ratio: "16:9",
                                bitrate: 3e3
                            },
                            "720p": {
                                label: "720p",
                                width: 1280,
                                height: 720,
                                ratio: "16:9",
                                bitrate: 1800
                            },
                            SVGA: {
                                label: "SVGA",
                                width: 800,
                                height: 600,
                                ratio: "4:3",
                                bitrate: 800
                            },
                            "480p": {
                                label: "480p",
                                width: 858,
                                height: 480,
                                ratio: "16:9",
                                bitrate: 750
                            },
                            VGA: {
                                label: "VGA",
                                width: 640,
                                height: 480,
                                ratio: "4:3",
                                bitrate: 600
                            },
                            "360p": {
                                label: "360p",
                                width: 640,
                                height: 360,
                                ratio: "16:9",
                                bitrate: 400
                            },
                            "240p": {
                                label: "240p",
                                width: 426,
                                height: 240,
                                ratio: "16:9",
                                bitrate: 220
                            },
                            CIF: {
                                label: "CIF",
                                width: 352,
                                height: 288,
                                ratio: "4:3",
                                bitrate: 200
                            },
                            QVGA: {
                                label: "QVGA",
                                width: 320,
                                height: 240,
                                ratio: "4:3",
                                bitrate: 180
                            },
                            "180p": {
                                label: "180p",
                                width: 320,
                                height: 180,
                                ratio: "16:9",
                                bitrate: 160
                            },
                            "90p": {
                                label: "90p",
                                width: 160,
                                height: 90,
                                ratio: "16:9",
                                bitrate: 100
                            }
                        }, o.state = {
                            packetLoss: !1,
                            revealed: !0,
                            tapRequired: !1,
                            connected: !1,
                            connecting: !1,
                            settingsActive: !1,
                            statusInfo: "Connecting...",
                            buttonContent: "Connecting",
                            buttonDisabled: !0,
                            bitrateInfo: n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: "eye slash"
                            }), "Detecting"),
                            videoWidth: 640,
                            videoHeight: 360,
                            videoAspectRatio: 1.77,
                            camera: null,
                            cameraOptions: [],
                            videoSource: null,
                            microphone: null,
                            microphoneOptions: [],
                            audioSource: null,
                            maxBitrate: 750,
                            maxResolutionHeight: 480,
                            bitrate: 600,
                            bitrateOptions: [],
                            resolution: "360p",
                            resolutionOptions: []
                        }, o.onChange = o.onChange.bind(Object(g.a)(o)), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.devMode && console.log("components/Camera componentDidMount"), this._isMounted = !0, Object(R.a)(Object(x.a)(a.prototype), "componentDidMount", this).call(this), this.interfaceReady()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.devMode && console.log("components/Camera componentWillUnmount"), this.props.serverUpdate({
                                task: "media",
                                connected: !1
                            }), this._isMounted = !1, this.stopPublisher();
                            this.state;
                            this.localStream && this.localStream.getTracks().forEach((function(e) {
                                return e.stop()
                            })), Object(R.a)(Object(x.a)(a.prototype), "componentWillUnmount", this).call(this)
                        }
                    }, {
                        key: "timerStart",
                        value: function() {
                            this.stats.video.bitrate = 0, this.stats.audio.bitrate = 0, this.stats.video.packetsLost = 0, this.stats.audio.packetsLost = 0, this.stats.video.qualityLimitationReason = "none", this.timer = setInterval(this.timerTick.bind(this), 2500), this.setState({
                                packetLoss: !1
                            })
                        }
                    }, {
                        key: "timerStop",
                        value: function() {
                            clearInterval(this.timer), this.setState({
                                packetLoss: !1
                            })
                        }
                    }, {
                        key: "timerTick",
                        value: function() {
                            var e = this;
                            if (this.props.appState.publishRequired && (this.state.connected || "1" == this.props.config.cameraAutoBroadcast) && (this.devMode && console.log("components/Camera timerTick publishRequired"), this.props.appStateUpdate({
                                    publishRequired: !1
                                }), this.setState({
                                    buttonDisabled: !0,
                                    buttonContent: this.txt("Closing")
                                }), this.stopPublisher(), this.setState({
                                    buttonDisabled: !0,
                                    buttonContent: this.txt("Restarting Broadcast"),
                                    statusInfo: this.txt("Restarting Broadcast"),
                                    connecting: !0,
                                    connected: !1
                                }), this.buildStream()), this.state.connected && this.peerConnection) {
                                this.peerConnection.getSenders().forEach((function(t) {
                                    t.getStats().then((function(t) {
                                        t.forEach((function(t) {
                                            e.devMode && t.packetsLost > 0 && console.log("components/Camera packetsLost ", t.packetsLost, t);
                                            var a = t.kind;
                                            if (void 0 === a && (a = t.mediaType), "remote-inbound-rtp" == t.type && (e.stats[a].packetsLost = t.packetsLost, e.stats[a].roundTripTime = t.roundTripTime, e.stats[a].jitter = t.jitter, e.stats[a].timestampRemote = t.timestamp), "outbound-rtp" === t.type && !t.isRemote && ("video" === a || "audio" === a)) {
                                                var o = t.timestamp - e.stats[a].timestamp;
                                                o > 0 && o < 6e3 && t.bytesSent >= e.stats[a].bytesSent && (e.stats[a].bitrate = 8 * (t.bytesSent - e.stats[a].bytesSent) / o), e.stats[a].timestamp = t.timestamp, e.stats[a].bytesSent = t.bytesSent, e.stats[a].qualityLimitationReason = t.qualityLimitationReason
                                            }
                                        }))
                                    }))
                                }));
                                var t = "";
                                this.audioInterface || this.props.room.audioOnly || this.props.appState.audioMode || "Way2Screen" == this.props.appState.screen && this.props.appState.revealMode && !this.props.appState.revealed || (t = n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                    name: "video camera"
                                }), Math.round(this.stats.video.bitrate), " kbps", "none" !== this.stats.video.qualityLimitationReason && void 0 !== this.stats.video.qualityLimitationReason ? "(limited: " + this.stats.video.qualityLimitationReason + ")" : "", this.stats.video.roundTripTime > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "clock"
                                }), this.stats.video.roundTripTime, " ") : "", this.stats.video.jitter > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "circle notch"
                                }), Math.round(1e3 * (this.stats.video.jitter + Number.EPSILON)) / 1e3, " jitter ") : "", this.stats.video.packetsLost > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "exclamation circle"
                                }), this.stats.video.packetsLost, " packets lost ") : "", n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "expand"
                                }), this.state.videoWidth, "x", this.state.videoHeight, " "), n.a.createElement("br", null))), this.connectionInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "broken chain"
                                }), "Socket Not Connected"), this.wsConnection && (this.connectionInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "chain"
                                }), this.wsConnection.readyState)), this.peerInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "stop circle"
                                }), "Peer Not Connected"), this.peerConnection && (this.peerInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "play circle"
                                }), this.peerConnection.iceConnectionState, "/", this.peerConnection.iceGatheringState, "/", this.peerConnection.signalingState));
                                var a = n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                    name: "wait"
                                }), "Measuring...");
                                (this.stats.video.bitrate > 0 || this.stats.audio.bitrate > 0) && (a = n.a.createElement("div", null, t, n.a.createElement(y.a, {
                                    name: "microphone"
                                }), Math.round(this.stats.audio.bitrate), " kbps", "none" !== this.stats.audio.qualityLimitationReason && void 0 !== this.stats.audio.qualityLimitationReason ? "(limited: " + this.stats.audio.qualityLimitationReason + ")" : "", this.stats.audio.roundTripTime > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "clock"
                                }), this.stats.audio.roundTripTime, " ") : "", this.stats.audio.jitter > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "circle notch"
                                }), Math.round(1e3 * (this.stats.audio.jitter + Number.EPSILON)) / 1e3, " jitter ") : "", this.stats.audio.packetsLost > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "exclamation circle"
                                }), this.stats.audio.packetsLost, " packets lost ") : "", n.a.createElement("br", null), this.connectionInfo, " ", this.peerInfo)), (this.state.settingsActive || this.audioInterface) && this.setState({
                                    bitrateInfo: a
                                }), (this.stats.audio.packetsLost || this.stats.video.packetsLost) && (this.state.packetLoss || this.setState({
                                    packetLoss: !0
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = this.props,
                                o = this.onChange;
                            this.devMode = a.appState.devMode;
                            var i = {};
                            if (!this.audioInterface) {
                                var s = t.videoWidth,
                                    r = t.videoHeight,
                                    c = 0,
                                    l = 0;
                                t.width && t.aspectRatio && t.videoAspectRatio && (t.videoAspectRatio > t.aspectRatio ? (r = (s = t.width) / t.videoAspectRatio, l = (t.height - r) / 2) : (s = (r = t.height) * t.videoAspectRatio, c = (t.width - s) / 2)), i = {
                                    position: "absolute",
                                    left: c,
                                    top: l,
                                    width: s,
                                    height: r
                                }
                            }
                            var d = "";
                            t.tapRequired && (d = n.a.createElement(w.a.Field, null, n.a.createElement(b.a, {
                                inverted: !0,
                                name: "tap",
                                content: "Tap to Show",
                                onClick: this.onClick.bind(this)
                            }), n.a.createElement(U.a, {
                                pointing: "left",
                                color: "black"
                            }, "Gesture is required to show preview")));
                            var p = "",
                                m = "",
                                u = "microphone";
                            this.audioInterface || a.room.audioOnly || a.appState.audioMode || "Way2Screen" == a.appState.screen && a.appState.revealMode && !a.appState.revealed || (u = "video", p = n.a.createElement(w.a.Field, null, n.a.createElement(I.a, {
                                compact: !0,
                                className: "inverted tiny",
                                name: "camera",
                                value: t.camera,
                                placeholder: "Camera",
                                selection: !0,
                                onChange: this.onChange,
                                options: t.cameraOptions
                            })), m = n.a.createElement(n.a.Fragment, null, n.a.createElement(w.a.Field, null, n.a.createElement(I.a, {
                                compact: !0,
                                className: "inverted tiny",
                                name: "resolution",
                                value: t.resolution,
                                onChange: o,
                                placeholder: "Video Resolution",
                                selection: !0,
                                options: t.resolutionOptions
                            })), n.a.createElement(w.a.Field, null, n.a.createElement(I.a, {
                                compact: !0,
                                className: "inverted tiny",
                                name: "bitrate",
                                value: t.bitrate,
                                onChange: o,
                                placeholder: "Video Bitrate",
                                selection: !0,
                                options: t.bitrateOptions
                            })))), this.tChecked || this.updateBitrates();
                            var h = "";
                            t.settingsActive ? (this.connectionInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                name: "broken chain"
                            }), "Socket Not Connected"), this.wsConnection && (this.connectionInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                name: "chain"
                            }), this.wsConnection.readyState)), this.peerInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                name: "stop circle"
                            }), "Peer Not Connected"), this.peerConnection && (this.peerInfo = n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                name: "play circle"
                            }), this.peerConnection.iceConnectionState, "/", this.peerConnection.iceGatheringState, "/", this.peerConnection.signalingState)), h = n.a.createElement("div", {
                                className: "controlsBottom"
                            }, n.a.createElement(U.a, {
                                size: "tiny",
                                color: "black"
                            }, this.tWarn), p, n.a.createElement(w.a.Field, null, n.a.createElement(I.a, {
                                compact: !0,
                                key: "microphone",
                                className: "inverted tiny",
                                name: "microphone",
                                value: t.microphone,
                                onChange: o,
                                placeholder: "Microphone",
                                selection: !0,
                                onChange: this.onChange,
                                options: t.microphoneOptions
                            })), m, n.a.createElement(w.a.Field, null, n.a.createElement(b.a, {
                                compact: !0,
                                inverted: !0,
                                name: "broadcast",
                                content: t.buttonContent,
                                onClick: this.onClick.bind(this),
                                disabled: t.buttonDisabled
                            }), n.a.createElement(U.a, {
                                pointing: "left",
                                color: "black"
                            }, t.statusInfo)), d, n.a.createElement(U.a, {
                                color: "black"
                            }, t.connected ? t.bitrateInfo : n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: ("microphone" == u ? "microphone" : "eye") + " slash"
                            }), "Not Broadcasting ", this.connectionInfo, " ", this.peerInfo, " ")))) : this.tWarn.length > 0 && (h = n.a.createElement("div", {
                                className: "controlsBottom"
                            }, n.a.createElement(U.a, {
                                size: "tiny",
                                pointing: "left",
                                color: "black"
                            }, this.tWarn)));
                            var v = "";
                            t.packetLoss && (v = n.a.createElement("span", {
                                "data-tooltip": this.txt("Packet Loss: Upload Connection Issue"),
                                "data-position": "left center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                name: "exclamation circle",
                                size: "large"
                            })));
                            var g = n.a.createElement(y.a, {
                                inverted: !0,
                                color: "black",
                                name: ("microphone" == u ? "microphone" : "eye") + " slash",
                                size: "large"
                            });
                            return t.connecting && (g = n.a.createElement(y.a, {
                                inverted: !0,
                                loading: !0,
                                name: "spinner",
                                size: "large"
                            })), t.connected && (g = n.a.createElement(y.a, {
                                inverted: !0,
                                name: u,
                                size: "large"
                            })), this.audioInterface ? n.a.createElement("div", {
                                className: "panel",
                                style: {
                                    backgroundColor: a.appState.backgroundColor
                                },
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement(w.a, null, n.a.createElement(w.a.Group, {
                                inline: !0
                            }, n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(y.a, {
                                inverted: a.appState.darkMode,
                                name: "microphone"
                            })), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(b.a, {
                                compact: !0,
                                inverted: a.appState.darkMode,
                                size: "small",
                                name: "broadcast",
                                content: t.buttonContent,
                                onClick: this.onClick.bind(this),
                                disabled: t.buttonDisabled
                            })), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(I.a, {
                                compact: !0,
                                size: "small",
                                key: "microphone",
                                className: a.appState.className,
                                name: "microphone",
                                value: t.microphone,
                                onChange: o,
                                placeholder: "Microphone",
                                selection: !0,
                                onChange: this.onChange,
                                options: t.microphoneOptions
                            })), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(U.a, {
                                pointing: "left",
                                color: a.appState.darkMode ? "black" : "grey"
                            }, t.statusInfo)), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, v), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(U.a, {
                                size: "tiny"
                            }, t.connected ? t.bitrateInfo : n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: ("microphone" == u ? "microphone" : "eye") + " slash"
                            }), "Not Broadcasting ", this.connectionInfo, " ", this.peerInfo, " ")))))) : n.a.createElement("div", {
                                className: "panel",
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement("div", {
                                className: "backgroundVideo"
                            }, n.a.createElement("video", {
                                poster: a.config.cameraSnapshot ? a.config.cameraSnapshot : a.room.snapshot,
                                style: i,
                                id: "localVideo",
                                ref: this.localVideo,
                                className: "localVideo",
                                autoPlay: !0,
                                playsInline: !0,
                                muted: !0,
                                onLoadedMetadata: function() {
                                    e.updateVideoSize("loadedmetadata"), e.videoPlay()
                                }
                            })), n.a.createElement("div", {
                                className: "controlsIcons"
                            }, v, g, n.a.createElement(b.a, {
                                compact: !0,
                                name: "settings",
                                size: "small",
                                inverted: !0,
                                icon: !0,
                                toggle: !0,
                                active: t.settingsActive,
                                onClick: this.onClick.bind(this),
                                "data-tooltip": "Toggle Controls",
                                "data-position": "left center"
                            }, n.a.createElement(y.a, {
                                name: "settings"
                            }))), h)
                        }
                    }, {
                        key: "onChange",
                        value: function(e, t) {
                            var a = t.name,
                                o = t.value;
                            this.setState({
                                [a]: o
                            }), this.changedBy = a, this.devMode && console.log("components/Camera onChange", a, o, e), navigator.mediaDevices.enumerateDevices().then(this.gotDevicesPublish.bind(this)).catch(this.handleError.bind(this))
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var o = t.name,
                                n = t.value,
                                i = this.txt;
                            if (this.devMode && console.log("components/Camera onClick", o, n, e), "tap" === o && this.videoPlay(), "broadcast" === o) switch (this.state.buttonContent) {
                                case i("Broadcast"):
                                    this.retriesLeft = 5, this.setState({
                                        buttonDisabled: !0,
                                        buttonContent: i("Starting Broadcast"),
                                        statusInfo: i("Starting Broadcast"),
                                        connecting: !0,
                                        connected: !1
                                    }), this.buildStream();
                                    break;
                                case i("Stop Broadcast"):
                                    this.retriesLeft = 0, this.setState({
                                        buttonDisabled: !0,
                                        buttonContent: i("Ending"),
                                        statusInfo: i("Ending")
                                    }), this.stopPublisher(), this.setState({
                                        buttonDisabled: !1,
                                        buttonContent: i("Broadcast"),
                                        statusInfo: i("Stopped Broadcast"),
                                        connecting: !1,
                                        connected: !1
                                    })
                            }
                            Object(R.a)(Object(x.a)(a.prototype), "onClick", this).call(this, e, {
                                name: o,
                                value: n
                            })
                        }
                    }, {
                        key: "retryIfTimeout",
                        value: function() {
                            if (this.devMode) return console.log("components/Camera retryIfTimeout skipped on devMode"), void(this.retryIfTimeoutSet = !1);
                            this.state.connected || this.retriesLeft > 0 && (this.retriesLeft--, this.stopPublisher(), this.setState({
                                buttonDisabled: !0,
                                buttonContent: this.txt("Auto Retry"),
                                statusInfo: this.txt("Auto Retry"),
                                connecting: !0,
                                connected: !1
                            }), this.buildStream()), this.retryIfTimeoutSet = !1
                        }
                    }, {
                        key: "updateBitrates",
                        value: function() {
                            var e = this.props;
                            if (this.bitrate = Number(e.config.bitrate), this.bitrate || (this.bitrate = 750), this.resolutionHeight = Number(e.config.resolutionHeight), this.resolutionHeight || (this.resolutionHeight = 480), this.videoBitrate = Number(e.config.videoBitrate), this.maxBitrate = Number(e.config.maxBitrate), this.videoBitrate < this.maxBitrate && (this.maxBitrate = this.videoBitrate), this.maxBitrate || (this.maxBitrate = 0), this.maxResolutionHeight = Number(e.config.maxResolutionHeight), this.maxResolutionHeight || (this.maxResolutionHeight = 0), this.tWarn = "", (!e.appState.checked || e.appState.checked && e.appState.mode.text) && (this.resolutionHeight > 480 && (this.resolutionHeight = 480), this.bitrate > 750 && (this.bitrate = 750), this.maxResolutionHeight > 480 && (this.maxResolutionHeight = 480), this.maxResolutionHeight || (this.maxResolutionHeight = 480), this.maxBitrate > 750 && (this.maxBitrate = 750), this.maxBitrate || (this.maxBitrate = 750), this.bitrate > this.maxBitrate && (this.bitrate = this.maxBitrate), this.resolutionHeight > this.maxResolutionHeight && (this.resolutionHeight = this.maxResolutionHeight), this.tWarn = "Free Mode: Broadcasting Bitrate & Resolution Limited"), this.state.maxBitrate = this.maxBitrate, this.state.maxResolutionHeight = this.maxResolutionHeight, this.resolutionOptions = [{
                                    key: "res-title",
                                    text: n.a.createElement("span", null, n.a.createElement("strong", null, this.txt("Video Resolution")), this.state.maxResolutionHeight ? " <" + this.state.maxResolutionHeight + "p" : ""),
                                    disabled: !0
                                }], this.resolutions)
                                for (var t in this.resolutions)(0 === this.maxBitrate || .35 * this.resolutions[t].bitrate <= this.maxBitrate) && (0 === this.maxResolutionHeight || this.resolutions[t].height <= this.maxResolutionHeight) && this.resolutionOptions.push({
                                    key: t,
                                    value: t,
                                    text: this.resolutions[t].label + " " + this.resolutions[t].width + "x" + this.resolutions[t].height + " " + this.resolutions[t].ratio
                                });
                            this.state.resolutionOptions = this.resolutionOptions, this.state.bitrateOptions = this.bitrateOptions(this.bitrate), this.state.resolution = this.resolutionHeight.toString() + "p", this.state.maxBitrate = this.maxBitrate, this.state.bitrate = this.bitrate, e.appState.checked && (this.tChecked = !0)
                        }
                    }, {
                        key: "interfaceReady",
                        value: function() {
                            var e = this;
                            this.state, this.props;
                            setTimeout((function() {
                                return e.props.serverUpdate({
                                    task: "media",
                                    connected: !1
                                })
                            }), 500), this.updateBitrates(), this.setState({
                                resolutionOptions: this.resolutionOptions,
                                resolution: this.resolutionHeight.toString() + "p",
                                bitrateOptions: this.bitrateOptions(this.bitrate),
                                maxBitrate: this.maxBitrate,
                                bitrate: this.bitrate,
                                settingsActive: "1" == this.props.config.cameraControls
                            });
                            var t = this.props.config.cameraAutoBroadcast,
                                a = this.txt;
                            if (!navigator.mediaDevices) return this.devMode && console.log("components/Camera interfaceReady navigator.mediaDevices", navigator.mediaDevices), void this.setState({
                                settingsActive: !0,
                                buttonDisabled: !1,
                                buttonContent: a("Broadcast"),
                                statusInfo: "Navigator media devices not available!",
                                connecting: !1,
                                connected: !1
                            });
                            if ("1" != t || this.props.appState.external) {
                                var o = a("Make a selection to start!");
                                this.props.appState.external && (o = a("External broadcast detected.")), navigator.mediaDevices.enumerateDevices().then(this.gotDevices.bind(this)).catch(this.handleError.bind(this)), this.setState({
                                    buttonDisabled: !1,
                                    buttonContent: a("Broadcast"),
                                    statusInfo: o,
                                    connecting: !1,
                                    connected: !1
                                }), this.props.appStateUpdate({
                                    cameraStatus: "off"
                                })
                            } else navigator.mediaDevices.enumerateDevices().then(this.gotDevicesPublish.bind(this)).catch(this.handleError.bind(this)), this.setState({
                                statusInfo: "Connecting...",
                                connecting: !0,
                                connected: !1
                            }), this.props.appStateUpdate({
                                cameraStatus: "pending"
                            });
                            this.devMode && console.log("components/Camera interfaceReady ", t, this.maxBitrate, this.maxResolutionHeight)
                        }
                    }, {
                        key: "videoPlay",
                        value: function() {
                            var e = this,
                                t = this.localVideo.current,
                                a = this.state,
                                o = !1,
                                n = t.play();
                            void 0 !== n && n.catch((function(t) {
                                o = !0, console.log("components/Camera Auto play error:" + t, t), e.setState({
                                    tapRequired: !0,
                                    settingsActive: !0
                                })
                            })).then((function() {
                                o || (e.setState({
                                    tapRequired: !1
                                }), a.connected && e.setState({
                                    settingsActive: !1
                                }))
                            }))
                        }
                    }, {
                        key: "buildStream",
                        value: function() {
                            if (this._isMounted) {
                                var e = this.state,
                                    t = this.props;
                                for (var a in window.stream && window.stream.getTracks().forEach((function(e) {
                                        e.stop()
                                    })), this.audioInterface || (this.localVideo.current.srcObject = null), this.resolutions) a == e.resolution && (e.videoWidth = this.resolutions[a].width, e.videoHeight = this.resolutions[a].height, "bitrate" !== this.changedBy && (0 === e.maxBitrate || this.resolutions[a].bitrate <= e.maxBitrate ? e.bitrate = this.resolutions[a].bitrate : e.bitrate = e.maxBitrate), e.bitrateOptions = this.bitrateOptions(this.resolutions[a].bitrate));
                                var o = {};
                                "_disabled" != e.audioSource ? o.audio = {
                                    deviceId: e.audioSource ? {
                                        ideal: e.audioSource
                                    } : void 0
                                } : o.audio = !1, this.audioInterface || t.room.audioOnly || t.appState.audioMode || "Way2Screen" == t.appState.screen && t.appState.revealMode && !t.appState.revealed ? o.video = !1 : "_disabled" != e.videoSource ? o.video = {
                                    deviceId: e.videoSource ? {
                                        ideal: e.videoSource
                                    } : void 0,
                                    width: {
                                        ideal: e.videoWidth
                                    },
                                    height: {
                                        ideal: e.videoHeight
                                    }
                                } : o.video = !1, "_disabled" != e.audioSource || "_disabled" != e.videoSource ? navigator.mediaDevices.getUserMedia(o).then(this.gotStream.bind(this)).then(this.gotDevices.bind(this)).catch(this.handleError.bind(this)) : console.log("Camera/buildStream NO SOURCE", e.videoSource, e.audioSource), this.devMode && console.log("components/Camera /buildStream videoSource: ", e.videoSource, "  constraints=", o, t.appState)
                            } else console.log("components/Camera buildStream not mounted")
                        }
                    }, {
                        key: "handleError",
                        value: function(e) {
                            if (console.log("components/Camera navigator.mediaDevices handleError: ", e, " this._isMounted=" + this._isMounted), this._isMounted) {
                                var t = "";
                                switch (e.name) {
                                    case "OverconstrainedError":
                                        t = " (" + e.constraint + ")"
                                }
                                this.setState({
                                    settingsActive: !0,
                                    statusInfo: "Media Error: " + e.name + t,
                                    buttonDisabled: !1,
                                    buttonContent: this.txt("Broadcast"),
                                    connecting: !1,
                                    connected: !1
                                }), this.props.appStateUpdate({
                                    cameraStatus: "error"
                                }), navigator.mediaDevices && navigator.mediaDevices.enumerateDevices || console.log("components/Camera navigator.mediaDevices handleError - enumerateDevices() - not supported"), navigator.mediaDevices.enumerateDevices().then((function(e) {
                                    e.forEach((function(e) {
                                        console.log("components/Camera navigator.mediaDevices handleError enumerateDevices " + e.kind + ": " + e.label + " id = " + e.deviceId)
                                    }))
                                })).catch((function(e) {
                                    console.log("components/Camera navigator.mediaDevices handleError enumerateDevices error: " + e.name + ": " + e.message)
                                }))
                            }
                        }
                    }, {
                        key: "gotStream",
                        value: function(e) {
                            return this.audioInterface || (this.localVideo.current.srcObject = e), this.devMode && console.log("components/Camera after getUserMedia", e), this.localStream = e, null != this.localStream && this.stopPublisher(), this.startPublisher(), navigator.mediaDevices.enumerateDevices()
                        }
                    }, {
                        key: "startPublisher",
                        value: function() {
                            this.devMode && console.log("components/Camera startPublisher", this.props), this.wsConnect(), this.timerStart()
                        }
                    }, {
                        key: "stopPublisher",
                        value: function() {
                            this.timerStop(), null != this.peerConnection && this.peerConnection.close(), null != this.wsConnection && this.wsConnection.close(), this.devMode && console.log("stopPublisher")
                        }
                    }, {
                        key: "gotDevices",
                        value: function(e) {
                            for (var t = this.state, a = [{
                                    key: "cam-title",
                                    text: n.a.createElement("span", null, "Select ", n.a.createElement("strong", null, "Camera"), ":"),
                                    disabled: !0
                                }, {
                                    text: "No Camera",
                                    value: "_disabled"
                                }], o = [{
                                    key: "mic-title",
                                    text: n.a.createElement("span", null, "Select ", n.a.createElement("strong", null, "Microphone"), ":"),
                                    disabled: !0
                                }], i = !1, s = !1, r = 0; r !== e.length; ++r) {
                                var c = e[r],
                                    l = {
                                        value: c.deviceId
                                    };
                                "audioinput" === c.kind ? (l.text = c.label || "microphone ".concat(o.length + 1), o.push(l), t.microphone || (t.microphone = c.deviceId), c.deviceId === t.microphone && (s = !0)) : "videoinput" === c.kind && (l.text = c.label || "camera ".concat(a.length + 1), a.push(l), t.camera || (t.camera = c.deviceId), c.deviceId === t.camera && (i = !0))
                            }(i || "_disabled" === t.camera) && (t.videoSource = t.camera), (s || "_disabled" === t.microphone) && (t.audioSource = t.microphone), t.camera === t.videoSource && t.microphone === t.audioSource || i && s || (this.devMode && console.log("components/Camera gotDevices: deviceID changed videoValid:" + t.camera + " videoSelected: " + t.microphone + " audioValid:" + s), this.setState({
                                settingsActive: !0,
                                statusInfo: "Media DeviceID changed: Please select again!",
                                buttonDisabled: !1,
                                buttonContent: this.txt("Broadcast")
                            })), this.devMode && console.log("gotDevices: verified videoSource: " + t.videoSource + " changed videoValid: " + i), this._isMounted && this.setState({
                                cameraOptions: a,
                                microphoneOptions: o
                            })
                        }
                    }, {
                        key: "gotDevicesPublish",
                        value: function(e) {
                            this.gotDevices(e), this.buildStream()
                        }
                    }, {
                        key: "updateVideoSize",
                        value: function(e) {
                            var t, a = this.localVideo.current,
                                o = this.state;
                            a.videoHeight && (o.videoWidth === a.videoWidth && o.videoHeight === a.videoHeight || (o.videoWidth = a.videoWidth, o.videoHeight = a.videoHeight, o.videoHeight || (o.videoHeight = 1)), t = a.videoWidth / a.videoHeight, o.videoAspectRatio !== t && this.setState({
                                videoAspectRatio: t
                            }))
                        }
                    }, {
                        key: "wsConnect",
                        value: function() {
                            var e = this,
                                t = this.props;
                            this.state;
                            if (this.props.appState.wsOpen) return this.devMode && console.log("components/Camera wsConnection websocket busy, retrying later", this.props.appState.wsComponent), this.wsConnection && this.wsConnection.close(), void setTimeout((function() {
                                return e.wsConnect()
                            }), 1e3);
                            this.props.appStateUpdate({
                                wsOpen: !0,
                                wsComponent: "Camera"
                            }), this.SDPOutput = {};
                            var a = null;
                            this.audioInterface || (a = this.localStream.getVideoTracks());
                            var o = this.localStream.getAudioTracks();
                            this.audioInterface || a.length > 0 && this.devMode && console.log("components/Camera wsConnect Using Video device: ".concat(a[0].label)), o.length > 0 && this.devMode && console.log("components/Camera wsConnect Using Audio device: ".concat(o[0].label)), this.streamInfo = {
                                applicationName: t.config.application,
                                streamName: t.room.streamBroadcast,
                                sessionId: "[empty]"
                            }, this.userData = {
                                param1: "value1",
                                videowhisper: "webrtc-broadcast"
                            }, this.devMode && console.log("components/Camera wsConnect", "_isMounted=" + this._isMounted, this.streamInfo, this.userData, this.props, this.state), this.wsConnection && (console.log("components/Camera wsConnect previous websocket (close)", this.wsConnection), this.wsConnection.close()), this.wsConnection = new WebSocket(t.config.wss), this.wsConnection.binaryType = "arraybuffer", this.wsConnection.onopen = this.onopen.bind(this), this.wsMessaged = !1, this.wsConnection.onmessage = function(t) {
                                return e.onmessage(t)
                            }, this.wsConnection.onclose = function() {
                                e.devMode && console.log("components/Camera wsConnection.onclose"), e.props.appStateUpdate({
                                    wsOpen: !1
                                })
                            }, this.wsConnection.onerror = function(t) {
                                console.log("components/Camera wsConnection.onerror: ", t), e.props.appStateUpdate({
                                    cameraStatus: "error"
                                }), e.wsConnection.close(), e.props.appStateUpdate({
                                    wsOpen: !1
                                }), e.setState({
                                    settingsActive: !0,
                                    buttonDisabled: !1,
                                    buttonContent: e.txt("Broadcast"),
                                    connecting: !1,
                                    connected: !1,
                                    bitrateInfo: n.a.createElement(y.a, {
                                        name: "eye slash"
                                    })
                                })
                            }
                        }
                    }, {
                        key: "onAddIceCandidateSuccess",
                        value: function(e) {
                            this.devMode && console.log("components/Camera onAddIceCandidateSuccess success.", e)
                        }
                    }, {
                        key: "onAddIceCandidateError",
                        value: function(e) {
                            console.log("components/Camera onAddIceCandidateError: ".concat(e.toString()))
                        }
                    }, {
                        key: "gotDescription",
                        value: function(e) {
                            var t = this,
                                a = this.props,
                                o = this.state,
                                n = this.txt;
                            this.devMode && console.log("components/Camera gotDescription: original", e, this.wsConnection), this.enhanceData = {}, void 0 !== a.config.audioBitrate && (this.enhanceData.audioBitrate = Number(a.config.audioBitrate)), void 0 !== o.bitrate && (this.enhanceData.videoBitrate = Number(o.bitrate)), void 0 !== a.videoFrameRate && (this.enhanceData.videoFrameRate = Number(a.videoFrameRate)), e.sdp = this.enhanceSDP(e.sdp, this.enhanceData), this.peerConnection || console.log("components/Camera gotDescription: Error no this.peerConnection", o), this.peerConnection.setLocalDescription(e).then((function() {
                                t.wsConnection.send('{"direction":"publish", "command":"sendOffer", "streamInfo":' + JSON.stringify(t.streamInfo) + ', "sdp":' + JSON.stringify(e) + ', "userData":' + JSON.stringify(t.userData) + "}")
                            })).catch((function(a) {
                                console.log("components/Camera gotDescription, setLocalDescription error, description.sdp", a, e.sdp), t.setState({
                                    statusInfo: "Stream setup error: Retry!",
                                    settingsActive: !0,
                                    buttonDisabled: !1,
                                    buttonContent: n("Broadcast"),
                                    connecting: !1,
                                    connected: !1
                                }), t.props.appStateUpdate({
                                    cameraStatus: "error"
                                })
                            }))
                        }
                    }, {
                        key: "addAudio",
                        value: function(e, t) {
                            var a = e.split(/\r\n/),
                                o = "",
                                n = !1;
                            for (var i in a) {
                                var s = a[i];
                                s.length <= 0 || (o += s, o += "\r\n", 0 == "a=rtcp-mux".localeCompare(s) && 0 == n && (o += t, n = !0))
                            }
                            return o
                        }
                    }, {
                        key: "addVideo",
                        value: function(e, t) {
                            var a = e.split(/\r\n/),
                                o = "",
                                n = !1,
                                i = !1;
                            for (var s in a) {
                                (r = a[s]).length <= 0 || (r.includes("a=rtcp-rsize") && (i = !0), r.includes("a=rtcp-mux") && !0)
                            }
                            for (var s in a) {
                                var r;
                                o += r = a[s], o += "\r\n", 0 == "a=rtcp-rsize".localeCompare(r) && 0 == n && 1 == i && (o += t, n = !0), 0 == "a=rtcp-mux".localeCompare(r) && 1 == n && 0 == i && (o += t, n = !0), 0 == "a=rtcp-mux".localeCompare(r) && 0 == n && 0 == i && (n = !0)
                            }
                            return o
                        }
                    }, {
                        key: "enhanceSDP",
                        value: function(e, t) {
                            var a, o = this.props.config,
                                n = e.split(/\r\n/),
                                i = "header",
                                s = !1,
                                r = "";
                            if (!e.includes("THIS_IS_SDPARTA") || o.videoCodec.includes("VP9")) {
                                for (var c in n) {
                                    if (!((p = n[c]).length <= 0))
                                        if (!p.includes("urn:3gpp:video-orientation")) this.checkLine(p) && (r += p, r += "\r\n")
                                }
                                r = this.addAudio(r, this.deliverCheckLine(o.audioCodec, "audio")), n = (e = r = this.addVideo(r, this.deliverCheckLine(o.videoCodec, "video"))).split(/\r\n/), r = ""
                            }
                            var l = !1,
                                d = !1;
                            for (var c in n) {
                                var p;
                                if (!((p = n[c]).length <= 0))
                                    if (0 != p.indexOf("m=audio") || -1 == this.audioindex)
                                        if (0 != p.indexOf("m=video") || -1 == this.videoIndex) {
                                            if (r += p, 0 === p.indexOf("m=audio") ? (i = "audio", s = !1) : 0 === p.indexOf("m=video") ? (i = "video", s = !1) : 0 == p.indexOf("a=rtpmap") && (i = "bandwidth", s = !1), (0 === p.indexOf("a=mid:") || 0 == p.indexOf("a=rtpmap")) && !s)
                                                if (0 == "audio".localeCompare(i)) void 0 !== t.audioBitrate && (r += "\r\nb=CT:" + t.audioBitrate, r += "\r\nb=AS:" + t.audioBitrate), s = !0;
                                                else if (0 == "video".localeCompare(i)) void 0 !== t.videoBitrate && (r += "\r\nb=CT:" + t.videoBitrate, r += "\r\nb=AS:" + t.videoBitrate, void 0 !== t.videoFrameRate && (r += "\r\na=framerate:" + t.videoFrameRate)), s = !0;
                                            else if (0 == "bandwidth".localeCompare(i)) {
                                                var m;
                                                if (null !== (m = this.getrtpMapID(p))) {
                                                    var u = m[2].toLowerCase();
                                                    0 != "vp9".localeCompare(u) && 0 != "vp8".localeCompare(u) && 0 != "h264".localeCompare(u) && 0 != "red".localeCompare(u) && 0 != "ulpfec".localeCompare(u) && 0 != "rtx".localeCompare(u) || void 0 === t.videoBitrate || l || (r += "\r\na=fmtp:" + m[1] + " x-google-min-bitrate=64000;x-google-start-bitrate=" + 1250 * t.videoBitrate + ";x-google-max-bitrate=" + 1250 * t.videoBitrate, l = !0), 0 != "opus".localeCompare(u) && 0 != "isac".localeCompare(u) && 0 != "g722".localeCompare(u) && 0 != "pcmu".localeCompare(u) && 0 != "pcma".localeCompare(u) && 0 != "cn".localeCompare(u) || void 0 === t.audioBitrate || d || (r += "\r\na=fmtp:" + m[1] + " x-google-min-bitrate=16000;x-google-start-bitrate=" + 1250 * t.audioBitrate + ";x-google-max-bitrate=" + 1250 * t.audioBitrate, d = !0)
                                                }
                                            }
                                            r += "\r\n"
                                        } else r += (a = p.split(" "))[0] + " " + a[1] + " " + a[2] + " " + this.videoIndex + "\r\n";
                                else r += (a = p.split(" "))[0] + " " + a[1] + " " + a[2] + " " + this.audioindex + "\r\n"
                            }
                            if (void 0 !== t.audioBitrate && t.audioBitrate > 0 && (r = this.setMediaBitrateSDP(r, "audio", t.audioBitrate)), void 0 !== t.videoBitrate && t.videoBitrate > 0 && (r = this.setMediaBitrateSDP(r, "video", t.videoBitrate)), navigator.userAgent.toLowerCase().indexOf("safari/") > -1) r = r.replace(/UDP\/TLS\/RTP\/SAVPF/gi, "RTP/SAVPF");
                            return this.devMode && console.log("components/Camera Resulting SDP: " + r, o.videoCodec, t.videoBitrate, o.audioCodec, t.audioBitrate), r
                        }
                    }, {
                        key: "deliverCheckLine",
                        value: function(e, t) {
                            var a = "";
                            for (var o in this.SDPOutput) {
                                var n = this.SDPOutput[o];
                                if (a += o, n.includes(e)) {
                                    if (e.includes("VP9") || e.includes("VP8")) {
                                        var i = "",
                                            s = n.split(/\r\n/);
                                        for (var r in s) {
                                            var c = s[r]; - 1 === c.indexOf("transport-cc") && -1 === c.indexOf("goog-remb") && -1 === c.indexOf("nack") && (i += c, i += "\r\n")
                                        }
                                        return t.includes("audio") && (this.audioindex = o), t.includes("video") && (this.videoIndex = o), i
                                    }
                                    return t.includes("audio") && (this.audioindex = o), t.includes("video") && (this.videoIndex = o), n
                                }
                            }
                            return a
                        }
                    }, {
                        key: "checkLine",
                        value: function(e) {
                            if (e.startsWith("a=rtpmap") || e.startsWith("a=rtcp-fb") || e.startsWith("a=fmtp")) {
                                var t = e.split(":");
                                if (t.length > 1) {
                                    var a = t[1].split(" ");
                                    if (!isNaN(a[0]) && !a[1].startsWith("http") && !a[1].startsWith("ur")) {
                                        var o = this.SDPOutput[a[0]];
                                        return o || (o = ""), o += e + "\r\n", this.SDPOutput[a[0]] = o, !1
                                    }
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "getrtpMapID",
                        value: function(e) {
                            var t = new RegExp("a=rtpmap:(\\d+) (\\w+)/(\\d+)"),
                                a = e.match(t);
                            return a && a.length >= 3 ? a : null
                        }
                    }, {
                        key: "errorHandler",
                        value: function(e) {
                            this.devMode && console.log("components/Camera ", e)
                        }
                    }, {
                        key: "onicecandidate",
                        value: function(e) {
                            null != e.candidate && this.devMode && console.log("components/Camera gotIceCandidate: " + JSON.stringify({
                                ice: e.candidate
                            }))
                        }
                    }, {
                        key: "onsignalingstatechange",
                        value: function() {
                            var e, t = this,
                                a = this.txt;
                            this.peerConnection && (e = this.peerConnection.signalingState, this.devMode && console.log("components/Camera onsignalingstatechange state, peerConnection, wsConnection  ".concat(e), this.peerConnection.signalingState, this.peerConnection.readyState, this.peerConnection, this.wsConnection), "have-local-offer" == e && "new" == this.peerConnection.iceConnectionState && (this.setState({
                                buttonDisabled: !1,
                                buttonContent: a("Stop Broadcast"),
                                statusInfo: a("Broadcasting")
                            }), this.props.appStateUpdate({
                                cameraStatus: "pending"
                            }), this.retryIfTimeoutSet || (setTimeout((function() {
                                return t.retryIfTimeout()
                            }), this.retryTimeout), this.retryIfTimeoutSet = !0)))
                        }
                    }, {
                        key: "oniceconnectionstatechange",
                        value: function() {
                            var e, t = this,
                                a = this.props,
                                o = this.txt;
                            this.peerConnection && (e = this.peerConnection.iceConnectionState, this.devMode && console.log("components/Camera oniceconnectionstatechange peerConnection.iceConnectionState ".concat(e), this.peerConnection.iceConnectionState, this.peerConnection.iceGatheringState, this.peerConnection.readyState), "completed" !== e && "connected" !== e || (this.setState({
                                settingsActive: !1,
                                buttonDisabled: !1,
                                buttonContent: o("Stop Broadcast"),
                                statusInfo: o("Broadcasting"),
                                connecting: !1,
                                connected: !0,
                                bitrateInfo: n.a.createElement(y.a, {
                                    name: "clock"
                                })
                            }), a.serverUpdate({
                                task: "media",
                                connected: !0
                            }), a.appStateUpdate({
                                publishRequired: !1,
                                cameraStatus: "live"
                            }), this.peerConnection && this.peerConnection.getSenders().forEach((function(e) {
                                if (e.track) {
                                    var a = e.getParameters();
                                    a.encodings || (a.encodings = [{}]), "audio" == e.track.kind && t.enhanceData.audioBitrate && (a.encodings[0].maxBitrate = 1e3 * t.enhanceData.audioBitrate), "video" == e.track.kind && t.enhanceData.videoBitrate && (a.encodings[0].maxBitrate = 1e3 * t.enhanceData.videoBitrate), e.setParameters(a), t.devMode && console.log("components/Camera oniceconnectionstatechange ", e.track.kind, a)
                                }
                            }))), "failed" !== e && "disconnected" !== e && "closed" !== e || (this.setState({
                                settingsActive: !0,
                                buttonDisabled: !1,
                                buttonContent: o("Broadcast"),
                                statusInfo: e,
                                connecting: !1,
                                connected: !1,
                                bitrateInfo: n.a.createElement(y.a, {
                                    name: "eye slash"
                                })
                            }), a.serverUpdate({
                                task: "media",
                                connected: !1
                            }), a.appStateUpdate({
                                cameraStatus: "off"
                            })))
                        }
                    }]), a
                }(N);
            A.propTypes = {
                appState: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                user: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired,
                appStateUpdate: O.a.func.isRequired,
                cameraConfig: O.a.object
            };
            a(418);
            var j = a(299),
                T = a(285),
                L = a(553),
                P = a(301),
                V = a(94),
                W = a.n(V),
                q = a(554),
                F = a(128),
                H = a.n(F),
                B = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return t.config && e in t.config.text ? t.config.text[e] : e
                        }, o.toMMSS = function(e) {
                            var t = Math.floor(e / 60),
                                a = e - 60 * t;
                            return a < 10 && (a = "0" + a), t + ":" + a
                        }, o.onChange = function(e, t) {
                            var a = t.name,
                                n = t.value;
                            o.state[a] != n && (o.setState({
                                [a]: n
                            }, (function() {
                                o.changedBy = a, o.recordingDiscard(), navigator.mediaDevices.enumerateDevices().then(o.gotDevices.bind(Object(g.a)(o))).catch(o.handleError.bind(Object(g.a)(o)))
                            })), o.devMode && console.log("components/Recorder onChange", a, n, e))
                        }, o.devMode = e.appState.devMode, o.videoWidth = 480, o.videoHeight = 320, o.state = {
                            camera: null,
                            cameraOptions: [],
                            videoSource: null,
                            microphone: null,
                            microphoneOptions: [],
                            audioSource: null,
                            mode: "audio",
                            mediaRecorder: !1,
                            buttonStart: !1,
                            buttonStop: !1,
                            buttonDiscard: !1,
                            buttonSend: !1,
                            buttonSave: !1,
                            buttonVerify: !1,
                            statusInfo: "",
                            uploading: !1,
                            displayTime: "0:00"
                        }, o.info = "", o.maxTime = 0, o.audioPlayback = n.a.createRef(), o.videoPlayback = n.a.createRef(), o.videoPreview = n.a.createRef(), o.recorderData = null, o.mimeType = "audio/mpeg", o.fileExtension = "mp3", o.resolutions = {
                            "4K": {
                                label: "4K",
                                width: 3840,
                                height: 2160,
                                ratio: "16:9",
                                bitrate: 12e3
                            },
                            "1440p": {
                                label: "1440p",
                                width: 2560,
                                height: 1440,
                                ratio: "16:9",
                                bitrate: 6e3
                            },
                            "1080p": {
                                label: "1080p",
                                width: 1920,
                                height: 1080,
                                ratio: "16:9",
                                bitrate: 3e3
                            },
                            "720p": {
                                label: "720p",
                                width: 1280,
                                height: 720,
                                ratio: "16:9",
                                bitrate: 1800
                            },
                            SVGA: {
                                label: "SVGA",
                                width: 800,
                                height: 600,
                                ratio: "4:3",
                                bitrate: 800
                            },
                            "480p": {
                                label: "480p",
                                width: 858,
                                height: 480,
                                ratio: "16:9",
                                bitrate: 750
                            },
                            VGA: {
                                label: "VGA",
                                width: 640,
                                height: 480,
                                ratio: "4:3",
                                bitrate: 600
                            },
                            "360p": {
                                label: "360p",
                                width: 640,
                                height: 360,
                                ratio: "16:9",
                                bitrate: 400
                            },
                            "240p": {
                                label: "240p",
                                width: 426,
                                height: 240,
                                ratio: "16:9",
                                bitrate: 220
                            },
                            CIF: {
                                label: "CIF",
                                width: 352,
                                height: 288,
                                ratio: "4:3",
                                bitrate: 200
                            },
                            QVGA: {
                                label: "QVGA",
                                width: 320,
                                height: 240,
                                ratio: "4:3",
                                bitrate: 180
                            },
                            "180p": {
                                label: "180p",
                                width: 320,
                                height: 180,
                                ratio: "16:9",
                                bitrate: 160
                            },
                            "90p": {
                                label: "90p",
                                width: 160,
                                height: 90,
                                ratio: "16:9",
                                bitrate: 100
                            }
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "timerStart",
                        value: function() {
                            this.props;
                            this.timerTimeStart = Date.now(), this.timerLocal = setInterval(this.timerTick.bind(this), 1e3)
                        }
                    }, {
                        key: "timerStop",
                        value: function() {
                            clearInterval(this.timerLocal), this.timeLocal = Date.now() - this.timerTimeStart, this.setState({
                                displayTime: this.toMMSS(Math.floor(this.timeLocal / 1e3))
                            })
                        }
                    }, {
                        key: "timerTick",
                        value: function() {
                            this.timeLocal = Date.now() - this.timerTimeStart, this.props.appState.checked && this.props.appState.mode.time && (0 == this.maxTime || this.maxTime > this.props.appState.mode.time) && (this.maxTime = this.props.appState.mode.time), this.setState({
                                displayTime: this.toMMSS(Math.floor(this.timeLocal / 1e3))
                            }), this.maxTime > 0 && this.timeLocal >= 1e3 * this.maxTime && this.recordingStop()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.devMode && console.log("components/Recorder componentDidMount", this.props), this.setupInterface(), this._isMounted = !0
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.devMode && console.log("components/Recorder componentWillUnmount"), this._isMounted = !1, this.recordingDiscard(), this.timerStop()
                        }
                    }, {
                        key: "setupInterface",
                        value: function() {
                            this.isEdge = -1 !== navigator.userAgent.indexOf("Edge") && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), this.recorderRTC = null, this.stream = null, this.setState({
                                statusInfo: this.txt("Start Recording")
                            }), this.props.config.recorderMaxTime && (this.maxTime = this.props.config.recorderMaxTime), this.getMedia()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "getMedia",
                        value: function() {
                            var e, t = this,
                                a = this.state;
                            this.props;
                            (this.state.mediaRecorder && "undefined" == typeof MediaRecorder && this.setState({
                                mediaRecorder: !1,
                                mode: "audio"
                            }), this.state.mediaRecorder || "undefined" == typeof MediaRecorder || this.setState({
                                mediaRecorder: !0
                            }), "audio" === this.state.mode ? (this.mimeType = "audio/mpeg", this.fileExtension = "mp3") : (this.mimeType = "video/mp4", this.fileExtension = "mp4"), "undefined" !== typeof MediaRecorder && "function" === typeof MediaRecorder.isTypeSupported) && (e = "audio" === this.state.mode ? {
                                mp3: "audio/mpeg",
                                wav: "audio/wav",
                                webm: "audio/webm",
                                ogg: "audio/ogg"
                            } : {
                                mp4: "video/mp4",
                                webm: "video/webm",
                                mkv: "video/x-matroska"
                            }, this.mimeType = Object.values(e).filter(MediaRecorder.isTypeSupported)[0], this.fileExtension = Object.keys(e).find((function(a) {
                                return e[a] === t.mimeType
                            })), this.devMode && console.log("components/Recorder MediaRecorder", this.mimeType, this.fileExtension));
                            for (var o in this.resolutions) o == a.resolution && (this.videoWidth = this.resolutions[o].width, this.videoHeight = this.resolutions[o].height);
                            var n = {};
                            "_disabled" != a.audioSource ? n.audio = {
                                deviceId: a.microphone ? {
                                    ideal: a.microphone
                                } : void 0
                            } : n.audio = !1, !this.isEdge && n.audio && (n.audio.echoCancellation = !1), "_disabled" != a.videoSource && "audio" != a.mode ? n.video = {
                                deviceId: a.camera ? {
                                    ideal: a.camera
                                } : void 0,
                                width: {
                                    ideal: this.videoWidth
                                },
                                height: {
                                    ideal: this.videoHeight
                                }
                            } : n.video = !1, this.devMode && console.log("components/Recorder getMedia", n, this.state), navigator.mediaDevices.getUserMedia(n).then(this.gotStream.bind(this)).then(this.gotDevices.bind(this)).catch(this.handleError.bind(this))
                        }
                    }, {
                        key: "gotStream",
                        value: function(e) {
                            if (this._isMounted) return this.stream = e, "video" == this.state.mode && (this.videoPreview.current.srcObject = e), this.devMode && console.log("components/Recorder gotStream", e, this.videoPreview.current), this.setState({
                                buttonStart: !0
                            }), navigator.mediaDevices.enumerateDevices()
                        }
                    }, {
                        key: "gotDevices",
                        value: function(e) {
                            if (this._isMounted) {
                                this.devMode && console.log("components/Recorder gotDevices after getUserMedia", e);
                                for (var t = this.state, a = this.props, o = [{
                                        key: "cam-title",
                                        text: n.a.createElement("span", null, "Select ", n.a.createElement("strong", null, "Camera"), ":"),
                                        disabled: !0
                                    }], i = [{
                                        key: "mic-title",
                                        text: n.a.createElement("span", null, "Select ", n.a.createElement("strong", null, "Microphone"), ":"),
                                        disabled: !0
                                    }], s = !1, r = !1, c = 0; c !== e.length; ++c) {
                                    var l = e[c],
                                        d = {
                                            value: l.deviceId
                                        };
                                    "audioinput" === l.kind ? (d.text = l.label || "microphone ".concat(i.length + 1), i.push(d), t.microphone || (t.microphone = l.deviceId), l.deviceId === t.microphone && (r = !0)) : "videoinput" === l.kind && (d.text = l.label || "camera ".concat(o.length + 1), o.push(d), t.camera || (t.camera = l.deviceId), l.deviceId === t.camera && (s = !0))
                                }(s || "_disabled" === t.camera) && (t.videoSource = t.camera), (r || "_disabled" === t.microphone) && (t.audioSource = t.microphone), t.camera === t.videoSource && t.microphone === t.audioSource || s && r || (console.log("components/Camera gotDevices: deviceID changed videoValid:" + t.camera + " videoSelected: " + t.microphone + " audioValid:" + r), this.setState({
                                    statusInfo: "Media DeviceID changed: Please select again!"
                                })), this.devMode && console.log("gotDevices: verified videoSource: " + t.videoSource + " changed videoValid: " + s);
                                var p = !1;
                                if ((!a.appState.checked || a.appState.checked && a.appState.mode.text) && (p = !0, a.appState.checked && a.appState.mode.time && (0 == this.maxTime || this.maxTime > a.appState.mode.time) && (this.maxTime = a.appState.mode.time)), this.modeText = p, this.resolutionHeight = Number(a.config.resolutionHeight), this.resolutionHeight || (this.resolutionHeight = 480), this.maxResolutionHeight = Number(a.config.maxResolutionHeight), this.maxResolutionHeight || (this.maxResolutionHeight = 0), this.tWarn = "", (!a.appState.checked || a.appState.checked && a.appState.mode.text) && (this.resolutionHeight > 480 && (this.resolutionHeight = 480), this.maxResolutionHeight > 480 && (this.maxResolutionHeight = 480), this.maxResolutionHeight || (this.maxResolutionHeight = 480), this.resolutionHeight > this.maxResolutionHeight && (this.resolutionHeight = this.maxResolutionHeight), this.tWarn = "Free Mode: Limited resolution and recording time."), this.state.maxResolutionHeight = this.maxResolutionHeight, this.resolutionOptions = [{
                                        key: "res-title",
                                        text: n.a.createElement("span", null, n.a.createElement("strong", null, this.txt("Video Resolution")), this.state.maxResolutionHeight ? " <" + this.state.maxResolutionHeight + "p" : ""),
                                        disabled: !0
                                    }], this.resolutions)
                                    for (var m in this.resolutions)(0 === this.maxResolutionHeight || this.resolutions[m].height <= this.maxResolutionHeight) && this.resolutionOptions.push({
                                        key: m,
                                        value: m,
                                        text: this.resolutions[m].label + " " + this.resolutions[m].width + "x" + this.resolutions[m].height + " " + this.resolutions[m].ratio
                                    });
                                this.state.resolutionOptions = this.resolutionOptions, t.resolution || (this.state.resolution = this.resolutionHeight.toString() + "p"), a.appState.checked && (this.tChecked = !0), this._isMounted && this.setState({
                                    cameraOptions: o,
                                    microphoneOptions: i
                                })
                            }
                        }
                    }, {
                        key: "handleError",
                        value: function(e) {
                            console.log("components/Recorer getMedia handleError: ", e)
                        }
                    }, {
                        key: "SaveToDisk",
                        value: function(e, t) {
                            if (window.ActiveXObject) {
                                if (window.ActiveXObject && document.execCommand) {
                                    var a = window.open(e, "_blank");
                                    a.document.close(), a.document.execCommand("SaveAs", !0, t || e), a.close()
                                }
                            } else {
                                var o = document.createElement("a");
                                if (o.href = e, o.download = t || "unknown", o.style = "display:none;opacity:0;color:transparent;", (document.body || document.documentElement).appendChild(o), "function" === typeof o.click) o.click();
                                else {
                                    o.target = "_blank";
                                    var n = document.createEvent("Event");
                                    n.initEvent("click", !0, !0), o.dispatchEvent(n)
                                }(window.URL || window.webkitURL).revokeObjectURL(o.href)
                            }
                            this.props.recorderStatus("fileSaved")
                        }
                    }, {
                        key: "getRandomString",
                        value: function() {
                            if (window.crypto && window.crypto.getRandomValues && -1 === navigator.userAgent.indexOf("Safari")) {
                                for (var e = window.crypto.getRandomValues(new Uint32Array(3)), t = "", a = 0, o = e.length; a < o; a++) t += e[a].toString(36);
                                return t
                            }
                            return (Math.random() * (new Date).getTime()).toString(36).replace(/\./g, "")
                        }
                    }, {
                        key: "getFileName",
                        value: function(e) {
                            var t = new Date;
                            return "VideoWhisper-" + t.getFullYear() + t.getMonth() + t.getDate() + "-" + this.getRandomString() + "." + e
                        }
                    }, {
                        key: "uploadCompleted",
                        value: function(e) {
                            console.log("components/Recorder uploadCompleted", e), this.setState({
                                uploading: !1,
                                statusInfo: this.txt("Upload completed.")
                            }), "chat" == this.props.options.scenario && this.props.serverUpdate({
                                task: "update",
                                update: "chat"
                            }), this.props.recorderStatus("uploadCompleted")
                        }
                    }, {
                        key: "recordingStop",
                        value: function() {
                            var e = this;
                            this.devMode && console.log("components/Recorder recordingStop", this.recorderRTC), this.mediaRecorder && this.mediaRecorder.stop(), this.recorderRTC && this.recorderRTC.stopRecording((function() {
                                e.recorderData = URL.createObjectURL(e.recorderRTC.getBlob()), e.devMode && console.log("components/Recorder this.recorderData", e.recorderData), "audio" === e.state.mode ? (e.audioPlayback.current.src = e.recorderData, e.audioPlayback.current.play().then((function(t) {
                                    e.devMode && console.log("components/Recorder Audio Autoplay started", t)
                                }), (function(e) {
                                    console.log("components/Recorder Audio Autoplay reject:", e)
                                })).catch((function(e) {
                                    console.log("components/Recorder Audio Autoplay error:", e)
                                }))) : (e.videoPlayback.current.src = e.recorderData, e.videoPlayback.current.play().then((function(t) {
                                    e.devMode && console.log("components/Recorder Video Autoplay started", t)
                                }), (function(e) {
                                    console.log("components/Recorder Video Autoplay reject:", e)
                                })).catch((function(e) {
                                    console.log("components/Recorder Video Autoplay error:", e)
                                })))
                            })), this.timerStop(), this.setState({
                                buttonStart: !1,
                                buttonStop: !1,
                                buttonDiscard: !0,
                                buttonSend: !0,
                                buttonSave: !0,
                                buttonVerify: !0,
                                statusInfo: this.txt("Recorded")
                            })
                        }
                    }, {
                        key: "recordingDiscard",
                        value: function() {
                            var e = this;
                            this.recorderData = null, this.stream && this.stream.getTracks().forEach((function(t) {
                                t.stop(), e.devMode && console.log("components/Recorder buttonDiscard closed track", t)
                            })), this.setState({
                                buttonStart: !0,
                                buttonStop: !1,
                                buttonDiscard: !1,
                                buttonSend: !1,
                                buttonSave: !1,
                                buttonVerify: !1,
                                statusInfo: this.txt("Start Recording"),
                                displayTime: "0:00"
                            }), this.getMedia()
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var a = this,
                                o = t.name,
                                n = t.value,
                                i = this.state,
                                s = this.props;
                            switch (this.devMode && console.log("components/Recorder onClick", o, n, e, i), o) {
                                case "buttonDetect":
                                    this.getMedia();
                                    break;
                                case "buttonAudio":
                                    if ("audio" == i.mode) break;
                                    this.setState({
                                        mode: "audio"
                                    }, (function() {
                                        return a.recordingDiscard()
                                    }));
                                    break;
                                case "buttonVideo":
                                    if (!i.mediaRecorder) break;
                                    if ("video" === i.mode) break;
                                    this.setState({
                                        mode: "video"
                                    }, (function() {
                                        return a.recordingDiscard()
                                    }));
                                    break;
                                case "buttonStart":
                                    if (this.mediaRecorder && (this.mediaRecorder.stop(), this.mediaRecorder = null), this.recorderRTC && (this.recorderRTC.destroy(), this.recorderRTC = null), this.directMediaRecorder = !1, this.directMediaRecorder) this.fileExtension = "mp4", this.mimeType = "video/mp4", this.mediaRecorder = new MediaRecorder(this.stream, {
                                        mimeType: this.mimeType
                                    }), this.chunks = [], this.mediaRecorder.ondataavailable = function(e) {
                                        a.chunks.push(e.data)
                                    }, this.mediaRecorder.onerror = function(e) {
                                        console.log("components/Recorder MediaRecorder.onerror: " + e)
                                    }, this.mediaRecorder.onwarning = function(e) {
                                        console.log("components/Recorder mediaRecorder.onwarning: " + e)
                                    }, this.mediaRecorder.onstop = function() {
                                        a.devMode && console.log("components/Recorder mediaRecorder.onstop");
                                        var e = new Blob(a.chunks, {
                                            type: "video/mp4"
                                        });
                                        a.chunks = [], a.recorderData = URL.createObjectURL(e), a.videoPlayback.current.src = a.recorderData, a.videoPlayback.current.play().then((function(e) {
                                            a.devMode && console.log("components/Recorder mediaRecorder Video Autoplay started", e)
                                        }), (function(e) {
                                            console.log("components/Recorder mediaRecorder Video Autoplay reject:", e)
                                        })).catch((function(e) {
                                            console.log("components/Recorder mediaRecorder Video Autoplay error:", e)
                                        }))
                                    }, this.mediaRecorder.onstart = function() {
                                        a.devMode && console.log("components/Recorder mediaRecorder.onstart", a.mimeType)
                                    }, this.mediaRecorder.start();
                                    else {
                                        var r = {
                                            type: "audio" == this.state.mode ? "audio" : "video",
                                            mimeType: this.mimeType,
                                            numberOfAudioChannels: this.isEdge ? 1 : 2,
                                            checkForInactiveTracks: !0,
                                            bufferSize: 16384,
                                            disableLogs: !this.devMode,
                                            recorderType: W.a.MediaStreamRecorder
                                        };
                                        (this.isSafari || this.isEdge) && "audio" === i.mode && (r.recorderType = W.a.StereoAudioRecorder), navigator.platform && -1 === navigator.platform.toString().toLowerCase().indexOf("win") && (r.sampleRate = 48e3), this.isSafari && (r.sampleRate = 44100, r.bufferSize = 4096, r.numberOfAudioChannels = 2), this.recorderRTC = W()(this.stream, r), this.devMode && console.log("components/Recorder buttonStart", r, this.recorderRTC), this.recorderRTC.startRecording()
                                    }
                                    this.timerStart(), this.setState({
                                        buttonStart: !1,
                                        buttonStop: !0,
                                        buttonDiscard: !1,
                                        buttonSend: !1,
                                        buttonSave: !1,
                                        buttonVerify: !1,
                                        statusInfo: this.txt("Recording") + " " + this.mimeType + " ." + this.fileExtension
                                    });
                                    break;
                                case "buttonStop":
                                    this.recordingStop();
                                    break;
                                case "buttonDiscard":
                                    this.recordingDiscard();
                                    break;
                                case "buttonDownload":
                                    if (this.devMode && console.log("components/Recorder buttonDownload", this.recorderRTC), this.mediaRecorder) {
                                        this.SaveToDisk(this.recorderData, this.getFileName(this.fileExtension));
                                        break
                                    }
                                    if (!this.recorderRTC || !this.recorderRTC.getBlob()) break;
                                    if (this.isSafari) {
                                        this.recorderRTC.getDataURL((function(e) {
                                            a.SaveToDisk(e, a.getFileName(a.fileExtension))
                                        }));
                                        break
                                    }
                                    var c = this.recorderRTC.getBlob(),
                                        l = new File([c], this.getFileName(this.fileExtension), {
                                            type: this.mimeType
                                        });
                                    W.a.invokeSaveAsDialog(l);
                                    break;
                                case "buttonSend":
                                    if (!s.config.serverURL) return void console.log("components/Recorder  missing serverURL", s.config.serverURL, s.config);
                                    var d = H.a.post(s.config.serverURL);
                                    d.field("task", "recorder_upload"), d.field("mode", this.state.mode), d.field("scenario", s.options.scenario), d.field("VideoWhisper[userID]", s.user.ID), d.field("VideoWhisper[sessionID]", s.user.sessionID), d.field("VideoWhisper[sessionKey]", s.user.sessionKey), s.room.ID ? (d.field("VideoWhisper[roomID]", s.room.ID), d.field("VideoWhisper[privateUID]", s.room.privateUID)) : console.log("components/Recorder missing room ID", s.room, s.user, s.config.serverURL);
                                    var p = [],
                                        m = this.getFileName(this.fileExtension);
                                    c = this.recorderRTC.getBlob(), l = new File([c], m, {
                                        type: this.mimeType
                                    });
                                    d.attach(m, l, m), p.push(m), d.field("files[]", p), d.then(this.uploadCompleted.bind(this)), console.log("components/Recorder uploading ...", p, d), this.setState({}), this.setState({
                                        uploading: !0,
                                        statusInfo: this.txt("Uploading. Please wait...")
                                    })
                                    break;
                                case "buttonSave":
                                    var m = this.getFileName(this.fileExtension),
                                    c = this.recorderRTC.getBlob(),
                                    l = this.recorderData,
                                    z = this.state.mode;
                                    saveRecordedFile(z,m,l,c);
                                    break;
                                case "buttonVerify":
                                    var m = this.getFileName(this.fileExtension),
                                    c = this.recorderRTC.getBlob(),
                                    l = this.recorderData,
                                    z = this.state.mode;
                                    verifyRecordedFile(z,m,l,c);
                            }
                            this.props.recorderStatus(o)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = this.state,
                                a = this.txt;
                            return this.devMode = e.appState.devMode, n.a.createElement("div", {
                                key: "recorderControls"
                            }, n.a.createElement(b.a.Group, null, n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonAudio",
                                onClick: this.onClick.bind(this),
                                color: "audio" == t.mode ? "black" : "grey",
                                "data-tooltip": a("Audio")
                            }, " ", n.a.createElement(y.a, {
                                name: "microphone"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonVideo",
                                onClick: this.onClick.bind(this),
                                color: "video" == t.mode ? "black" : "grey",
                                "data-tooltip": a("Video")
                            }, " ", n.a.createElement(y.a, {
                                name: "video",
                                disabled: !t.mediaRecorder
                            }), " ")), t.mediaRecorder ? "" : n.a.createElement(U.a, {
                                pointing: "left",
                                color: "black"
                            }, "Video recording is not available in this browser."), n.a.createElement(q.a, {
                                hidden: !0
                            }), this.isSafari && !t.mediaRecorder ? n.a.createElement(C.a, {
                                size: "small",
                                compact: !0,
                                className: e.appState.className
                            }, "How To Enable Webcam Recording in Latest Safari:", n.a.createElement("br", null), "1. Show Develop menu from Safari > Preferences > Advanced menu.", n.a.createElement("br", null), "2. Toggle Develop > Experimental Features > MediaRecorder menu to enable video recording.", n.a.createElement("br", null), "3. Reload page to activate feature.") : "", n.a.createElement(C.a, {
                                compact: !0,
                                className: e.appState.className
                            }, n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonStart",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonStart,
                                color: "red",
                                "data-tooltip": a("Start")
                            }, " ", n.a.createElement(y.a, {
                                name: "circle"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonStop",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonStop,
                                color: "blue",
                                "data-tooltip": a("Stop")
                            }, " ", n.a.createElement(y.a, {
                                name: "square"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonDiscard",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonDiscard,
                                color: "orange",
                                "data-tooltip": a("Discard")
                            }, " ", n.a.createElement(y.a, {
                                name: "trash"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonDownload",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonSend,
                                color: "olive",
                                "data-tooltip": a("Download")
                            }, " ", n.a.createElement(y.a, {
                                name: "download"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonSend",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonSend,
                                color: "green",
                                loading: t.uploading,
                                "data-tooltip": a("Send"),
                                "style": {display: 'none'}
                            }, " ", n.a.createElement(y.a, {
                                name: "send"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonSave",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonSave,
                                color: "green",
                                loading: t.uploading,
                                "data-tooltip": a("Save")
                            }, " ", n.a.createElement(y.a, {
                                name: "save"
                            }), " "), n.a.createElement(b.a, {
                                icon: !0,
                                name: "buttonVerify",
                                onClick: this.onClick.bind(this),
                                disabled: !t.buttonVerify,
                                color: "purple",
                                loading: t.uploading,
                                "data-tooltip": a("Verify")
                            }, " ", n.a.createElement(y.a, {
                                name: "warning"
                            }), " "), n.a.createElement(q.a, {
                                hidden: !0
                            }), n.a.createElement(I.a, {
                                compact: !0,
                                key: "microphone",
                                className: e.appState.className + " tiny",
                                name: "microphone",
                                value: t.microphone,
                                onChange: this.onChange,
                                placeholder: "Microphone",
                                selection: !0,
                                options: t.microphoneOptions
                            }), "video" == t.mode ? n.a.createElement("span", null, n.a.createElement(I.a, {
                                compact: !0,
                                key: "camera",
                                className: e.appState.className + " tiny",
                                name: "camera",
                                value: t.camera,
                                onChange: this.onChange,
                                placeholder: "Camera",
                                selection: !0,
                                options: t.cameraOptions
                            }), n.a.createElement(I.a, {
                                compact: !0,
                                className: e.appState.className + " tiny",
                                name: "resolution",
                                value: t.resolution,
                                onChange: this.onChange,
                                placeholder: "Video Resolution",
                                selection: !0,
                                options: t.resolutionOptions
                            }), this.tWarn ? n.a.createElement("div", null, n.a.createElement(U.a, {
                                size: "small",
                                color: e.appState.darkMode ? "black" : "grey"
                            }, this.tWarn)) : "") : "", "video" == t.mode ? n.a.createElement("div", null, n.a.createElement("br", null), " ", n.a.createElement("video", {
                                style: {
                                    maxWidth: "100%"
                                },
                                id: "videoPreview",
                                ref: this.videoPreview,
                                autoPlay: !0,
                                muted: !0,
                                playsInline: !0
                            })) : ""), n.a.createElement(U.a, {
                                color: "black"
                            }, t.displayTime, this.maxTime ? " / " + this.toMMSS(this.maxTime) : ""), n.a.createElement(U.a, {
                                color: "black"
                            }, t.statusInfo), n.a.createElement("br", null), n.a.createElement(C.a, {
                                compact: !0,
                                className: e.appState.className,
                                style: {
                                    visibility: t.buttonSend ? "visible" : "hidden"
                                }
                            }, this.txt("Recorded"), " ", n.a.createElement("br", null), "video" == t.mode ? n.a.createElement("video", {
                                style: {
                                    maxWidth: "100%",
                                    visibility: t.buttonSend ? "visible" : "hidden"
                                },
                                id: "videoPlayback",
                                ref: this.videoPlayback,
                                controls: !0,
                                autoPlay: !0,
                                playsInline: !0
                            }) : n.a.createElement("audio", {
                                style: {
                                    maxWidth: "100%",
                                    visibility: t.buttonSend ? "visible" : "hidden"
                                },
                                id: "audioPlayback",
                                ref: this.audioPlayback,
                                controls: !0,
                                autoPlay: !0,
                                playsInline: !0
                            }), this.isSafari ? "" : n.a.createElement("div", null, n.a.createElement(U.a, {
                                size: "small",
                                color: e.appState.darkMode ? "black" : "grey"
                            }, "Safari may not play recordings from other browsers. Record using Safari if available."))))
                        }
                    }]), a
                }(o.Component),
                z = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return t.config && e in t.config.text ? t.config.text[e] : e
                        }, o.onSubmit = function(e) {
                            e.preventDefault();
                            var t = Object(g.a)(o),
                                a = t.props,
                                n = t.state;
                            if (o.devMode && console.log("ChatInput onSubmit", o.state), o.state) {
                                var i = o.state.message;
                                if (0 !== i.length) {
                                    switch (i) {
                                        case "/vws dev":
                                            a.appStateUpdate({
                                                devMode: !0
                                            }), console.log("components/ChatInput devMode Enabled", o.state)
                                    }
                                    var s = {
                                        userID: a.user.ID,
                                        userName: a.user.name,
                                        userAvatar: a.user.avatar,
                                        notification: !1,
                                        text: i,
                                        time: (new Date).valueOf(),
                                        mentionMessage: 0,
                                        mentionUser: "",
                                        ID: (new Date).valueOf()
                                    };
                                    0 != a.appState.chatMentionMessage && ("message" != n.mention && "replyat" != n.mention || (s.mentionMessage = a.appState.chatMentionMessage)), "" != a.appState.chatMentionUser && ("user" != n.mention && "replyat" != n.mention || (s.mentionUser = a.appState.chatMentionUser)), a.sendMessage(s), o.setState({
                                        message: ""
                                    }), a.appStateUpdate({
                                        chatMentionMessage: 0,
                                        chatMentionUser: ""
                                    })
                                }
                            }
                        }, o.emojiModalClose = function() {
                            return o.setState({
                                emojiModalShow: !1
                            })
                        }, o.recordModalClose = function() {
                            return o.setState({
                                recordModalShow: !1
                            })
                        }, o.onEmojiButton = function() {
                            return o.setState({
                                emojiModalShow: !0
                            })
                        }, o.onRecordButton = function() {
                            return o.setState({
                                recordModalShow: !0
                            })
                        }, o.addEmoji = function(e) {
                            o.devMode && console.log("components/ChatInput addEmoji", e);
                            var t = o.state.message;
                            e && e.native && (t += e.native), o.setState({
                                emojiModalShow: !1,
                                message: t
                            })
                        }, o.onMentionChange = function(e, t) {
                            o.devMode && console.log("components/ChatInput onMentionChange", t), "cancel" == t.value ? o.props.appStateUpdate({
                                chatMentionMessage: 0,
                                chatMentionUser: ""
                            }) : o.setState({
                                mention: t.value
                            })
                        }, o.recorderStatus = function(e) {
                            switch (o.devMode && console.log("components/ChatInput recorderStatus", e), e) {
                                case "uploadCompleted":
                                    o.recordModalClose()
                            }
                        }, o.devMode = e.appState.devMode, o.state = {
                            message: "",
                            mention: "replyat",
                            container: null,
                            emojiModalShow: !1,
                            recordModalShow: !1
                        }, o.inputRef = n.a.createRef(), o.onChange = o.onChange.bind(Object(g.a)(o)), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "onChange",
                        value: function(e) {
                            var t = e.target,
                                a = "checkbox" === t.type ? t.checked : t.value,
                                o = t.name;
                            "message" == o && (a = Object(T.checkText)(a)), this.setState({
                                [o]: a
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = this.onSubmit,
                                o = this.state,
                                i = this.onChange,
                                s = this.txt,
                                r = n.a.createElement(k.a, {
                                    key: "emojiModal",
                                    closeIcon: !0,
                                    open: o.emojiModalShow,
                                    onClose: this.emojiModalClose,
                                    size: "small",
                                    basic: t.appState.darkMode
                                }, n.a.createElement(E.a, {
                                    icon: "smile",
                                    content: s("Emoji")
                                }), n.a.createElement(k.a.Content, null, n.a.createElement(j.a, {
                                    onSelect: this.addEmoji,
                                    darkMode: t.appState.darkMode,
                                    native: !0,
                                    perLine: 16
                                })), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                    inverted: t.appState.darkMode,
                                    color: "red",
                                    onClick: this.emojiModalClose
                                }, n.a.createElement(y.a, {
                                    name: "remove"
                                }), " ", s("Cancel")))),
                                c = n.a.createElement(k.a, {
                                    key: "recordModal",
                                    closeIcon: !0,
                                    open: o.recordModalShow,
                                    onClose: this.recordModalClose,
                                    size: "small",
                                    basic: t.appState.darkMode
                                }, n.a.createElement(E.a, {
                                    icon: "file video",
                                    content: s("Record")
                                }), n.a.createElement(k.a.Content, null, n.a.createElement(B, {
                                    config: t.config,
                                    user: t.user,
                                    room: t.room,
                                    appState: t.appState,
                                    appStateUpdate: t.appStateUpdate,
                                    serverUpdate: t.serverUpdate,
                                    recorderStatus: this.recorderStatus,
                                    options: {
                                        scenario: "chat"
                                    }
                                })), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                    compact: !0,
                                    inverted: t.appState.darkMode,
                                    color: "red",
                                    onClick: this.recordModalClose
                                }, n.a.createElement(y.a, {
                                    name: "remove"
                                }), " ", s("Cancel")))),
                                l = "";
                            if (0 != t.appState.chatMentionMessage || "" != t.appState.chatMentionUser) {
                                var d = [{
                                    key: 1,
                                    text: n.a.createElement(y.a, {
                                        name: "arrow up"
                                    }),
                                    value: "message"
                                }, {
                                    key: 2,
                                    text: n.a.createElement(y.a, {
                                        name: "at"
                                    }),
                                    value: "user"
                                }, {
                                    key: 3,
                                    text: n.a.createElement(y.a, {
                                        name: "reply"
                                    }),
                                    value: "replyat"
                                }, {
                                    key: 4,
                                    text: n.a.createElement(y.a, {
                                        name: "close"
                                    }),
                                    value: "cancel"
                                }];
                                l = n.a.createElement(I.a, {
                                    className: t.appState.className,
                                    compact: !0,
                                    inline: !0,
                                    options: d,
                                    defaultValue: o.mention,
                                    selection: !0,
                                    onChange: this.onMentionChange
                                })
                            }
                            return n.a.createElement("div", {
                                className: "panel",
                                style: {
                                    backgroundColor: t.appState.backgroundColor
                                },
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement("div", {
                                className: "controlsBottom"
                            }, n.a.createElement(w.a, {
                                onSubmit: a,
                                className: t.appState.className
                            }, n.a.createElement(w.a.Group, {
                                inline: !0,
                                unstackable: !0
                            }, n.a.createElement(L.a, {
                                inverted: t.appState.darkMode,
                                attached: "left",
                                fluid: !0,
                                focus: !0,
                                name: "message",
                                value: o.message,
                                onChange: i,
                                type: "text",
                                placeholder: s("Type your message")
                            }, n.a.createElement(P.a, {
                                src: t.user.avatar,
                                verticalAlign: "middle",
                                avatar: !0,
                                "data-tooltip": t.user.name
                            }), " ", n.a.createElement("label", null, n.a.createElement("small", null, t.user.name), "\xa0"), n.a.createElement("div", {
                                style: {
                                    zIndex: 4
                                }
                            }, l), n.a.createElement(b.a, {
                                compact: !0,
                                icon: !0,
                                type: "button",
                                color: "orange",
                                "data-tooltip": s("Record"),
                                onClick: this.onRecordButton,
                                inverted: t.appState.darkMode
                            }, n.a.createElement(y.a, {
                                name: "microphone"
                            })), n.a.createElement(b.a, {
                                compact: !0,
                                icon: !0,
                                type: "button",
                                color: "yellow",
                                "data-tooltip": s("Emoticons"),
                                onClick: this.onEmojiButton,
                                inverted: t.appState.darkMode
                            }, n.a.createElement(y.a, {
                                name: "smile"
                            })), n.a.createElement("input", {
                                ref: this.inputRef
                            }), n.a.createElement(b.a, {
                                compact: !0,
                                primary: !0,
                                icon: !0,
                                type: "submit",
                                "data-tooltip": s("Send"),
                                inverted: t.appState.darkMode
                            }, n.a.createElement(y.a, {
                                name: "send"
                            })))))), r, c)
                        }
                    }]), a
                }(o.Component),
                _ = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.message,
                                a = t.userID === e.userID,
                                o = t.notification,
                                i = e.previousUser === t.userID,
                                s = t.time - e.previousTime < 6e4,
                                r = t.userAvatar ? n.a.createElement(P.a, {
                                    src: t.userAvatar,
                                    avatar: !0,
                                    verticalAlign: "middle"
                                }) : "",
                                c = new Date(t.time),
                                l = c.toLocaleDateString() + " at " + c.toLocaleTimeString(),
                                d = "chatMessage " + (e.darkMode ? "dark " : "") + (o ? "notification" : "user") + " " + (a ? "own " : "") + (t.automated ? "automated" : ""),
                                p = i || o ? "" : n.a.createElement("strong", null, " ", r, " ", t.userName, " (", t.userID, ")"),
                                m = i && s ? "" : n.a.createElement("i", null, l),
                                u = p || m ? n.a.createElement(n.a.Fragment, null, p, " ", m, ":", n.a.createElement("br", null)) : "",
                                h = "";
                            return t.image && (h = n.a.createElement(P.a, {
                                src: t.image,
                                size: "mini",
                                rounded: !0,
                                verticalAlign: "middle"
                            })), n.a.createElement("li", {
                                className: d,
                                key: t.ID,
                                ref: e.messageRef
                            }, u, h, 0 != t.mentionMessage && void 0 != t.mentionMessage ? n.a.createElement(b.a, {
                                "data-tooltip": e.txt("Scrool to Message"),
                                onClick: function(a) {
                                    return e.messageScroll(a, t.mentionMessage)
                                },
                                size: "tiny",
                                className: e.darkMode ? "inverted " : "",
                                target: "_blank",
                                compact: !0,
                                icon: !0
                            }, " ", n.a.createElement(y.a, {
                                name: "arrow up",
                                size: "small"
                            }), " ") : "", "" != t.mentionUser && void 0 != t.mentionUser ? n.a.createElement("span", null, " @", t.mentionUser, n.a.createElement("br", null)) : "", t.audio ? n.a.createElement("div", null, n.a.createElement("audio", {
                                src: t.audio,
                                controls: !0
                            })) : "", t.video ? n.a.createElement("div", null, n.a.createElement("video", {
                                style: {
                                    maxWidth: "75%"
                                },
                                src: t.video,
                                controls: !0
                            })) : "", n.a.createElement("label", {
                                id: "m" + t.ID,
                                onClick: function(a) {
                                    return e.messageClick(a, t.ID, t.userName)
                                }
                            }, t.text.split("\n").map((function(e, t) {
                                return n.a.createElement("div", {
                                    key: t
                                }, e)
                            })), t.url ? n.a.createElement(b.a, {
                                className: e.darkMode ? "inverted " : "",
                                target: "_blank",
                                href: t.url,
                                compact: !0,
                                icon: !0
                            }, n.a.createElement(y.a, {
                                name: "linkify"
                            })) : ""))
                        }
                    }]), a
                }(o.Component),
                G = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return t.config && e in t.config.text ? t.config.text[e] : e
                        }, o.onScroll = function() {
                            Object(g.a)(o).refs.messageList.scrollTop
                        }, o.scrollToBottom = function() {
                            var e = o.refs.messageList,
                                t = e.scrollHeight - e.clientHeight;
                            s.a.findDOMNode(e).scrollTop = t > 0 ? t : 0
                        }, o.messageClick = function(e, t, a) {
                            o.devMode && console.log("components/ChatHistory messageClick", t, a, o.devMode, e), e.stopPropagation();
                            var n = Object(g.a)(o).props;
                            n.appState.chatMentionMessage == t && n.appState.chatMentionUser == a || n.appStateUpdate({
                                chatMentionMessage: t,
                                chatMentionUser: a
                            })
                        }, o.messageScroll = function(e, t) {
                            o.devMode && console.log("components/ChatHistory messageScroll", t, o.messageRefs[t]), e.stopPropagation(), o.messageRefs && o.messageRefs[t] && o.messageRefs[t].current && o.messageRefs[t].current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }, o.devMode = e.appState.devMode, o.messageRefs = {}, o.state = {
                            container: null
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.scrollToBottom()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = this.onScroll;
                            this.devMode = t.appState.devMode;
                            var o, i = !1;
                            (!t.appState.checked || t.appState.checked && t.appState.mode.text) && (i = !0);
                            var s = 0,
                                r = 0,
                                c = 0;
                            return this.messageRefs = {}, o = t.messages.length > 0 ? n.a.createElement("ul", {
                                className: "chatMessageList",
                                ref: "messageList",
                                onScroll: a
                            }, t.messages.map((function(a) {
                                i && a.modeText && (a.text = t.appState.tooltip, a.url = t.appState.tooltipURL, a.image = t.appState.tooltipImage), e.messageRefs[a.ID] || (e.messageRefs[a.ID] = n.a.createRef());
                                var o = n.a.createElement(_, {
                                    txt: e.txt,
                                    messageRef: e.messageRefs[a.ID],
                                    messageClick: e.messageClick,
                                    messageScroll: e.messageScroll,
                                    darkMode: t.appState.darkMode,
                                    userID: t.user.ID,
                                    message: a,
                                    key: a.ID,
                                    previousUser: s,
                                    previousTime: r
                                });
                                return s = a.userID, r = a.time, a.modeText && !i || c === a.ID ? "" : (c = a.ID, o)
                            }))) : n.a.createElement("ul", {
                                className: "chatMessageList",
                                ref: "messageList",
                                onScroll: a
                            }, n.a.createElement("li", {
                                className: "chatMessage",
                                key: "0"
                            }, n.a.createElement("span", null, "No Messages."))), n.a.createElement("div", {
                                className: "panel",
                                style: {
                                    backgroundColor: t.appState.backgroundColor
                                },
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement("div", {
                                className: "controls"
                            }, o))
                        }
                    }]), a
                }(o.Component),
                J = a(559),
                K = a(562),
                Y = a(563),
                Q = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return e in t.config.text ? t.config.text[e] : e
                        }, o.privateModalClose = function() {
                            return o.setState({
                                privateModalShow: !1
                            })
                        }, o.fullscreenModalClose = function() {
                            return o.setState({
                                fullscreenRecommended: !0
                            })
                        }, o.handleFullscreenChange = function(e) {
                            var t = !1;
                            (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (t = !0), o.setState({
                                fullscreen: t
                            })
                        }, o.toHHMMSS = function(e) {
                            var t = Math.floor(e / 3600),
                                a = Math.floor((e - 3600 * t) / 60),
                                o = e - 3600 * t - 60 * a;
                            return t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), t + ":" + a + ":" + o
                        }, o.state = {
                            tipLast: 0,
                            fullpage: !1,
                            fullscreenRecommended: !1,
                            fullscreen: !1,
                            tipsOpen: !1,
                            privateModalShow: !1,
                            privateLoading: !1,
                            requestModalShow: !1,
                            requestDetails: "Details for request modal: No action meta info!",
                            requestAction: {
                                ID: 0
                            },
                            displayTime: "00:00"
                        }, o.devMode = e.appState.devMode, o
                    }
                    return Object(v.a)(a, [{
                        key: "updateTime",
                        value: function(e) {
                            this.setState({
                                displayTime: this.toHHMMSS(Math.floor(e / 1e3))
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var a, o = t.name,
                                n = t.value,
                                i = this.state,
                                s = this.props;
                            switch (this.devMode && console.log("components/Actions onClick", o, n, e, "props:", s), o) {
                                case "fullpage":
                                    this.state.fullpage = !i.fullpage, this.setState({
                                        fullpage: this.state.fullpage
                                    }), this.fullpage();
                                    break;
                                case "sfx":
                                    var r = !s.appState.sfx;
                                    r && s.appSfx("message", null, !0), s.appStateUpdate({
                                        sfx: r
                                    }), s.serverUpdate({
                                        task: "options",
                                        name: "h5v_sfx",
                                        value: r
                                    });
                                    break;
                                case "darkMode":
                                    var c = !s.appState.darkMode;
                                    s.appStateUpdate({
                                        darkMode: c
                                    }), s.serverUpdate({
                                        task: "options",
                                        name: "h5v_dark",
                                        value: c
                                    });
                                    break;
                                case "fullscreenRecommended":
                                    s.config.actionFullpage && (this.setState({
                                        fullpage: !0
                                    }), this.fullpage());
                                case "fullscreen":
                                    if (this.state.fullscreenRecommended = !0, i.fullscreen) this.exitFullscreen();
                                    else {
                                        var l = document.getElementById("videowhisperVideochat");
                                        this.requestFullscreen(l)
                                    }
                                    break;
                                case "tip":
                                    if ("undefined" === typeof n) break;
                                    var d = parseInt(n);
                                    if (s.room.tips && s.room.tipOptions.length > 0 && s.room.tipOptions.length > d) {
                                        var p = s.room.tipOptions[d];
                                        s.serverUpdate({
                                            task: "tip",
                                            tip: p,
                                            tipsURL: s.room.tipsURL,
                                            targetID: s.room.performerID
                                        }), this.setState({
                                            tipsOpen: !1,
                                            tipLast: Date.now()
                                        }), console.log("components/Actions sending tip", p, d)
                                    }
                                    break;
                                case "next":
                                    s.serverUpdate({
                                        task: "next",
                                        targetID: s.room.performerID
                                    });
                                    break;
                                case "party_return":
                                    s.serverUpdate({
                                        task: "party_return"
                                    });
                                    break;
                                case "party_leave":
                                    s.serverUpdate({
                                        task: "party_leave"
                                    });
                                    break;
                                case "reveal":
                                    s.appStateUpdate({
                                        revealed: !0,
                                        publishRequired: !0
                                    });
                                    break;
                                case "private":
                                    this.setState({
                                        privateModalShow: !0
                                    });
                                    break;
                                case "privateClose":
                                    a = {
                                        action: "privateRequest",
                                        ID: s.room.actionID,
                                        privateUID: s.room.privateUID,
                                        status: 7
                                    }, s.serverUpdate({
                                        task: "interaction-close",
                                        interaction: a
                                    });
                                    break;
                                case "privateRequest":
                                    this.setState({
                                        privateLoading: !0,
                                        privateModalShow: !1
                                    });
                                    var m = {
                                        userName: s.user.name
                                    };
                                    a = {
                                        action: "privateRequest",
                                        userID: s.user.ID,
                                        roomID: s.room.ID,
                                        targetID: s.room.performerID,
                                        meta: m
                                    }, s.serverUpdate({
                                        task: "interaction",
                                        interaction: a
                                    });
                                    break;
                                case "declineRequest":
                                    this.setState({
                                        requestModalShow: !1
                                    }), a = {
                                        ID: i.requestAction.ID,
                                        answer: 0,
                                        status: 2
                                    }, s.serverUpdate({
                                        task: "interaction-answer",
                                        interaction: a
                                    });
                                    break;
                                case "acceptRequest":
                                    this.setState({
                                        requestModalShow: !1
                                    }), a = {
                                        ID: i.requestAction.ID,
                                        answer: 1,
                                        status: 2
                                    }, s.serverUpdate({
                                        task: "interaction-answer",
                                        interaction: a
                                    });
                                    break;
                                default:
                                    console.log("components/Actions onClick UNHANDLED", o, n, e)
                            }
                        }
                    }, {
                        key: "fullpage",
                        value: function() {
                            var e = document.getElementById("videowhisperVideochat");
                            this.state.fullpage ? (e.style.position = "fixed", e.style.top = "0", e.style.left = "0") : e.style.position = "absolute", console.log("components/Actions fullpage", this.state.fullpage, e.style.position)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("webkitfullscreenchange", this.handleFullscreenChange, !1), document.addEventListener("mozfullscreenchange", this.handleFullscreenChange, !1), document.addEventListener("msfullscreenchange", this.handleFullscreenChange, !1), document.addEventListener("MSFullscreenChange", this.handleFullscreenChange, !1), document.addEventListener("fullscreenchange", this.handleFullscreenChange, !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("webkitfullscreenchange", this.handleFullscreenChange), document.removeEventListener("mozfullscreenchange", this.handleFullscreenChange), document.removeEventListener("msfullscreenchange", this.handleFullscreenChange), document.removeEventListener("MSFullscreenChange", this.handleFullscreenChange), document.removeEventListener("fullscreenchange", this.handleFullscreenChange)
                        }
                    }, {
                        key: "requestFullscreen",
                        value: function(e) {
                            var t = !0;
                            this.state.fullscreen = t, e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : (console.log("components/Video Fullscreen API is not supported."), t = !1, this.state.fullscreen = !1), this.setState({
                                fullscreen: t
                            })
                        }
                    }, {
                        key: "exitFullscreen",
                        value: function() {
                            this.setState({
                                fullscreen: !1
                            }), (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("components/Actions Fullscreen API is not supported."))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.actions !== this.props.actions && this.processActions()
                        }
                    }, {
                        key: "processActions",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = this.state;
                            t.actions.length > 0 && t.actions.forEach((function(o) {
                                if (o)
                                    if (o.userID === t.user.ID) {
                                        if ("privateRequest" === o.action) {
                                            if (3 === o.status && 1 === o.answer) {
                                                o = {
                                                    ID: a.requestAction.ID,
                                                    status: 5
                                                };
                                                t.serverUpdate({
                                                    task: "interaction-confirm",
                                                    interaction: o
                                                })
                                            }
                                            o.status >= 3 && o.status < 7 && o.answer
                                        }
                                    } else if ("privateRequest" === o.action) {
                                    if (o.status < 2 && t.room.privateUID !== o.userID && (t.appSfx("call"), a.requestModalShow = !0, o.meta && e.setState({
                                            requestDetails: 'User "' + o.meta.userName + '" requested starting a private call.'
                                        }), a.requestAction = o), 2 === o.status && 1 === o.answer) {
                                        o = {
                                            ID: a.requestAction.ID,
                                            status: 3
                                        };
                                        t.serverUpdate({
                                            task: "interaction-answer",
                                            interaction: o
                                        })
                                    }
                                    o.status >= 3 && o.status < 7 && o.answer
                                }
                            }))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = this.state,
                                o = this.txt,
                                i = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                                s = navigator.userAgent.toLowerCase().indexOf("android") > -1,
                                r = [];
                            if (i || s || a.fullscreenRecommended || window.innerWidth < 500 && r.push(n.a.createElement(k.a, {
                                    key: "recommendFullscreen",
                                    closeIcon: !0,
                                    open: !0,
                                    onClose: this.fullscreenModalClose,
                                    size: "small"
                                }, n.a.createElement(E.a, {
                                    icon: "star",
                                    content: "FullScreen Recommended"
                                }), n.a.createElement(k.a.Content, null, n.a.createElement("h3", null, "When available space is small, fullscreen is recommended to access interface more easily.")), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                    color: "orange",
                                    onClick: this.fullscreenModalClose
                                }, n.a.createElement(y.a, {
                                    name: "remove"
                                }), " Cancel"), n.a.createElement(b.a, {
                                    color: "green",
                                    name: "fullscreenRecommended",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "expand"
                                }), " Go Fullscreen")))), t.config.siteMenu) {
                                var c = [],
                                    l = [],
                                    d = null;
                                t.config.siteMenu.forEach((function(e) {
                                    e.parentID ? l.push(n.a.createElement(I.a.Item, {
                                        key: e.ID,
                                        href: e.url,
                                        target: "_blank"
                                    }, " ", e.title, " ")) : (l.length ? (c.push(n.a.createElement(I.a, {
                                        className: t.appState.className,
                                        item: !0,
                                        key: d.ID,
                                        text: d.title
                                    }, n.a.createElement(I.a.Menu, null, l))), l = []) : d && c.push(n.a.createElement(J.a.Item, {
                                        key: d.ID,
                                        href: d.url,
                                        target: "_blank"
                                    }, " ", d.title, " ")), d = e)
                                })), r.push(n.a.createElement(K.a, {
                                    className: t.appState.className,
                                    key: "siteMenu",
                                    trigger: n.a.createElement(b.a, {
                                        compact: !0,
                                        className: t.appState.className,
                                        icon: !0,
                                        size: "small"
                                    }, n.a.createElement(y.a, {
                                        name: "align justify"
                                    })),
                                    flowing: !0,
                                    hoverable: !0
                                }, n.a.createElement(J.a, {
                                    vertical: !0,
                                    className: t.appState.className
                                }, n.a.createElement(J.a.Item, {
                                    header: !0
                                }, o("Site Menu")), c)))
                            }
                            if (r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    key: "balance",
                                    name: "balance",
                                    as: "div",
                                    labelPosition: "right"
                                }, n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    color: "green",
                                    target: "_balance",
                                    href: t.config.balanceURL
                                }, n.a.createElement(y.a, {
                                    name: "money"
                                })), n.a.createElement(U.a, {
                                    className: t.appState.className,
                                    as: "a",
                                    color: t.appState.darkMode ? "black" : "grey",
                                    pointing: "left",
                                    target: "_balance",
                                    href: t.config.balanceURL
                                }, t.user.balance))), t.room.tips && t.room.tipOptions.length > 0) {
                                var p = 0,
                                    m = n.a.createElement(n.a.Fragment, null, t.room.tipOptions.map((function(a, i) {
                                        if ("TIP" === a.tag && "custom" !== a.attributes.AMOUNT) return p++, n.a.createElement(Y.a.Column, {
                                            className: t.appState.className,
                                            key: "tip" + i,
                                            textAlign: "center"
                                        }, n.a.createElement(E.a, {
                                            as: "h4",
                                            className: t.appState.className
                                        }, a.attributes.IMAGE ? n.a.createElement(P.a, {
                                            src: t.room.tipsURL + a.attributes.IMAGE,
                                            size: "mini",
                                            rounded: !0,
                                            verticalAlign: "middle"
                                        }) : "", " ", a.attributes.AMOUNT), n.a.createElement("b", null, a.attributes.LABEL), n.a.createElement("div", null, a.attributes.NOTE), n.a.createElement("div", null, n.a.createElement(b.a, {
                                            compact: !0,
                                            className: t.appState.className,
                                            size: "small",
                                            color: "olive",
                                            name: "tip",
                                            value: i,
                                            onClick: e.onClick.bind(e)
                                        }, o("Gift"))))
                                    })));
                                r.push(n.a.createElement(K.a, {
                                    className: t.appState.className,
                                    key: "tipsPopup",
                                    trigger: n.a.createElement(b.a, {
                                        compact: !0,
                                        className: t.appState.className,
                                        size: "small",
                                        key: "tipsButton",
                                        name: "tipsButton",
                                        color: "olive",
                                        disabled: Date.now() - a.tipLast < 5e3
                                    }, " ", n.a.createElement(y.a, {
                                        name: "box"
                                    }), " ", o("Gifts")),
                                    flowing: !0,
                                    hoverable: !0,
                                    open: this.state.tipsOpen,
                                    onOpen: function() {
                                        return e.setState({
                                            tipsOpen: !0
                                        })
                                    },
                                    onClose: function() {
                                        return e.setState({
                                            tipsOpen: !1
                                        })
                                    }
                                }, n.a.createElement(Y.a, {
                                    className: t.appState.className,
                                    stackable: !0,
                                    centered: !0,
                                    divided: !0,
                                    columns: p,
                                    style: {
                                        overflow: "auto",
                                        maxHeight: 180,
                                        maxWidth: 480
                                    }
                                }, m)))
                            }
                            var u = !0,
                                h = o("Request Private Session");
                            if (t.room.actionPrivateDisable) h = o("Performer Disabled Private Requests");
                            else if (t.room.actionPrivateBusy) h = o("Performer is Busy in Private");
                            else if (t.room.users) {
                                t.room.users[t.room.performerID] ? u = !1 : h = o("Performer is Not Online")
                            }
                            if (t.room.actionPrivate && r.push(n.a.createElement("span", {
                                    key: "private",
                                    "data-tooltip": h
                                }, n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    name: "private",
                                    color: "orange",
                                    loading: a.privateLoading,
                                    disabled: a.privateLoading || u,
                                    onClick: this.onClick.bind(this)
                                }, " ", n.a.createElement(y.a, {
                                    name: "star"
                                }), " ", o("Private")))), t.room.actionPrivateClose && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    key: "privateClose",
                                    name: "privateClose",
                                    color: "red",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "window close"
                                }), " ", o("Close Private"))), r.push(n.a.createElement(k.a, {
                                    key: "privateModal",
                                    closeIcon: !0,
                                    open: a.privateModalShow,
                                    onClose: this.privateModalClose,
                                    size: "small"
                                }, n.a.createElement(E.a, {
                                    icon: "star",
                                    content: o("Request Private 2 Way Videochat Show")
                                }), n.a.createElement(k.a.Content, null, n.a.createElement("h3", null, t.room.performer)), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                    color: "red",
                                    onClick: this.privateModalClose
                                }, n.a.createElement(y.a, {
                                    name: "remove"
                                }), " ", o("Cancel")), n.a.createElement(b.a, {
                                    color: "green",
                                    name: "privateRequest",
                                    onClick: this.onClick.bind(this),
                                    loading: a.privateLoading,
                                    disabled: a.privateLoading
                                }, n.a.createElement(y.a, {
                                    name: "star"
                                }), " ", o("Request Private"))))), r.push(n.a.createElement(k.a, {
                                    key: "requestModal",
                                    open: a.requestModalShow,
                                    closeOnEscape: !1,
                                    closeOnDimmerClick: !1,
                                    size: "small"
                                }, n.a.createElement(E.a, {
                                    icon: "star",
                                    content: "Answer Private Show Request"
                                }), n.a.createElement(k.a.Content, null, n.a.createElement("h3", null, a.requestDetails)), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                    color: "red",
                                    name: "declineRequest",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "remove"
                                }), " ", o("Decline")), n.a.createElement(b.a, {
                                    color: "green",
                                    name: "acceptRequest",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "star"
                                }), " ", o("Accept"))))), t.room.next && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    key: "next",
                                    name: "next",
                                    color: "teal",
                                    "data-tooltip": o("Next: Random Videochat Room"),
                                    onClick: this.onClick.bind(this),
                                    disabled: t.appState.roomLoading
                                }, o("Next"), " ", n.a.createElement(y.a, {
                                    name: "arrow right"
                                }))), t.room.partyHost ? r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    key: "party_return",
                                    name: "party_return",
                                    color: "teal",
                                    "data-tooltip": o("Return Party to Start Room"),
                                    onClick: this.onClick.bind(this),
                                    disabled: t.appState.roomLoading
                                }, o("Return"), " ", n.a.createElement(y.a, {
                                    name: "arrow circle left"
                                }))) : t.room.party && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    key: "party_leave",
                                    name: "party_leave",
                                    color: "teal",
                                    "data-tooltip": o("Leave Party"),
                                    onClick: this.onClick.bind(this),
                                    disabled: t.appState.roomLoading
                                }, o("Leave"), " ", n.a.createElement(y.a, {
                                    name: "close"
                                }))), t.appState.revealMode && !t.appState.audioMode && !t.room.audioOnly && !t.appState.revealed && "Way2Screen" == t.appState.screen) {
                                var v = t.appState.revealWarmup - t.appState.screenTime,
                                    g = !0;
                                v <= 0 ? (v = "", g = !1) : v = n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                    name: "clock"
                                }), " ", v, " "), r.push(n.a.createElement("span", {
                                    "data-tooltip": o("Reveal Webcam")
                                }, n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    key: "reveal",
                                    name: "reveal",
                                    color: "olive",
                                    onClick: this.onClick.bind(this),
                                    disabled: g
                                }, n.a.createElement(y.a, {
                                    name: "video"
                                }), " ", o("Reveal"), " ", v)))
                            }
                            if (i || t.config.actionFullscreen && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    floated: "right",
                                    key: "fullscreen",
                                    name: "fullscreen",
                                    color: "grey",
                                    "data-tooltip": a.fullscreen ? o("Exit Fullscreen") : o("Enter Fullscreen"),
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: a.fullscreen ? "compress" : "expand"
                                }))), t.config.actionFullpage && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    floated: "right",
                                    key: "fullpage",
                                    name: "fullpage",
                                    color: "grey",
                                    "data-tooltip": a.fullpage ? "Zoom Out of Full Page" : "Zoom Into Full Page",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: a.fullpage ? "zoom-out" : "zoom-in"
                                }))), r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    floated: "right",
                                    key: "sfx",
                                    name: "sfx",
                                    color: t.appState.sfxError ? "red" : t.appState.sfx ? "green" : "yellow",
                                    "data-tooltip": t.appState.sfxError ? o("Tap to Play") : t.appState.sfx ? o("Sfx On") : o("Sfx Off"),
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: t.appState.sfxError ? "deaf" : t.appState.sfx ? "bell" : "bell slash"
                                }))), r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    icon: !0,
                                    size: "small",
                                    floated: "right",
                                    key: "darkMode",
                                    name: "darkMode",
                                    color: t.appState.darkMode ? "yellow" : "grey",
                                    "data-tooltip": t.appState.darkMode ? o("Lights On") : o("Dark Mode"),
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: t.appState.darkMode ? "sun" : "moon"
                                }))), (!t.appState.checked || t.appState.checked && t.appState.mode.text) && r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    icon: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    floated: "right",
                                    key: "videowhisper",
                                    name: "videowhisper",
                                    color: "violet",
                                    target: "_videowhisper",
                                    href: t.appState.tooltipURL,
                                    "data-tooltip": t.appState.tooltip
                                }, n.a.createElement(y.a, {
                                    name: "eye"
                                }))), r.push(n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    floated: "right",
                                    key: "time",
                                    name: "time",
                                    as: "div",
                                    labelPosition: "right"
                                }, n.a.createElement(b.a, {
                                    compact: !0,
                                    className: t.appState.className,
                                    size: "small",
                                    color: "yellow"
                                }, n.a.createElement(y.a, {
                                    name: "time"
                                })), n.a.createElement(U.a, {
                                    className: t.appState.className,
                                    as: "a",
                                    color: t.appState.darkMode ? "black" : "grey",
                                    pointing: "left"
                                }, a.displayTime))), t.room.actionButtons)
                                for (var f in t.room.actionButtons) {
                                    var S = t.room.actionButtons[f];
                                    r.push(n.a.createElement(b.a, {
                                        compact: !0,
                                        className: t.appState.className,
                                        icon: !0,
                                        size: "small",
                                        floated: S.floated,
                                        key: S.name,
                                        name: S.name,
                                        color: S.color,
                                        target: "_" + S.target,
                                        href: S.url,
                                        "data-tooltip": S.tooltip
                                    }, n.a.createElement(y.a, {
                                        name: S.icon
                                    }), " ", S.text))
                                }
                            return n.a.createElement("div", {
                                className: "panel",
                                style: {
                                    backgroundColor: t.appState.backgroundColor
                                },
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement("div", {
                                className: "controlsBottom"
                            }, r))
                        }
                    }]), a
                }(o.Component),
                X = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutBroadcast",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layCamera"
                            }, n.a.createElement(A, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                Z = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutBroadcastAudio",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layCamera"
                            }, n.a.createElement(A, {
                                cameraConfig: {
                                    audioInterface: !0
                                },
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                $ = a(182),
                ee = a.n($),
                te = a(297),
                ae = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).onLoadedData = function(e) {
                            var t = o.remoteVideo.current;
                            o.devMode && console.log("components/Video - loadeddata"), o.updateVideoSize("onLoadedData"), t.paused && 0 == t.currentTime && (console.log("components/Video loadeddata : video paused on load - try to play", t.src, e), o.videoPlay())
                        }, o.onopen = function(e) {
                            var t = this,
                                a = this.state;
                            this.devMode && console.log("components/Video wsConnection.onopen wsConnection.readyState:", this.wsConnection.readyState, e, this.state), this.props.appStateUpdate({
                                wsOpen: !0,
                                wsComponent: "Video onopen"
                            }), 1 == this.wsConnection.readyState && (a.retrying = !1, this.peerConnection = new RTCPeerConnection(this.peerConnectionConfig), this.peerConnection.addEventListener("icecandidate", (function(e) {
                                return t.icecandidate(t.peerConnection, e)
                            })), this.peerConnection.onsignalingstatechange = function(e) {
                                return t.onsignalingstatechange(e)
                            }, this.peerConnection.addEventListener("iceconnectionstatechange", (function(e) {
                                return t.iceconnectionstatechange(t.peerConnection, e)
                            })), this.peerConnection.addEventListener("track", this.track.bind(this)), this.wsConnection ? 1 == this.wsConnection.readyState ? this.sendPlayGetOffer() : console.log("components/Video wsConnection not open for sendPlayGetOffer wsConnection.readyState:", this.wsConnection.readyState) : console.log("components/Video wsConnection not available"))
                        }, o.onmessage = function(e) {
                            var t = this,
                                a = this.state;
                            this.devMode && console.log("components/Video onmessage", e);
                            var o = JSON.parse(e.data),
                                n = Number(o.status),
                                i = o.command,
                                s = "";
                            if (a.retryCount++, 200 != n) s = o.statusDescription, a.available && (504 === n || 514 === n || a.retryCount < a.autoRetries && "1" === this.props.config.videoAutoPlay) ? 1 === this.wsConnection.readyState ? (this.devMode && console.log("components/Video onmessage - Not ready: scheduling sendPlayGetOffer", n, s), setTimeout(this.sendPlayGetOffer.bind(this), 2500), s = s + " (retry #" + a.retryCount + ")", this.setState({
                                buttonDisabled: !0,
                                buttonContent: "Auto Retry",
                                statusInfo: s,
                                connecting: !0,
                                connected: !1
                            })) : (console.log("components/Video onmessage - wsConnection Not open for sendPlayGetOffer wsConnection.readyState:", this.wsConnection.readyState), this.setState({
                                buttonDisabled: !1,
                                buttonContent: "Retry",
                                statusInfo: s,
                                connecting: !1,
                                connected: !1
                            })) : this.stopStreamPlay(), this.setState({
                                statusInfo: s
                            });
                            else {
                                this.devMode && console.log("components/Video onmessage 200 msgJSON", o);
                                var r = o.streamInfo;
                                void 0 !== r && (this.state.streamInfo.sessionId = r.sessionId), void 0 !== o.sdp && (this.devMode && console.log("components/Video onmessage: setRemoteDescription sdp: " + JSON.stringify(o.sdp)), this.peerConnection.setRemoteDescription(o.sdp).then(this.peerCreateAnswer.bind(this)).catch(this.errorHandler.bind(this)));
                                var c = o.iceCandidates;
                                if (void 0 !== c)
                                    for (var l in c) this.devMode && console.log("addIceCandidate: " + JSON.stringify(c[l])), this.peerConnection.addIceCandidate(new RTCIceCandidate(c[l])).then((function() {
                                        return t.onAddIceCandidateSuccess(t.peerConnection)
                                    }), (function(e) {
                                        return t.onAddIceCandidateError(t.peerConnection, e)
                                    }));
                                0 == "sendResponse".localeCompare(i) && null != this.wsConnection && this.wsConnection.close()
                            }
                        }, o.devMode = e.appState.devMode, o._isMounted = !1, o.devMode && console.log("components/Video constructor", e), o.audioInterface = !1, e.videoConfig && (o.audioInterface = e.videoConfig.audioInterface), o.playStarted = !1, o.retriesLeft = 5, o.retryTimeout = 5e3, o.retryIfTimeoutSet = !1, o.wsWaited = 0, o.remoteVideo = n.a.createRef(), o.wsConnection = null, o.peerConnection = null, o.peerConnectionConfig = {
                            iceServers: []
                        }, o.userData = {}, o.startTime = null, o.stats = {
                            video: {
                                timestamp: 0,
                                bandwidth: 0
                            },
                            audio: {
                                timestamp: 0,
                                bandwidth: 0
                            }
                        }, o.state = {
                            packetLoss: !1,
                            streamInfo: {
                                applicationName: e.config.application,
                                streamName: e.room.streamPlayback,
                                userName: e.room.performer,
                                sessionId: "[empty]"
                            },
                            panelType: "Video",
                            meta: e.meta,
                            bitrateInfo: n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: "eye slash"
                            }), "Detecting"),
                            videoMuted: "muted",
                            videoMutedMessage: "Tap for Sound",
                            fullscreen: !1,
                            available: !1,
                            connected: !1,
                            connecting: !1,
                            autoRetries: 3,
                            statusInfo: "Connecting...",
                            buttonContent: "Connecting",
                            buttonDisabled: !0,
                            videoWidth: 640,
                            videoHeight: 360,
                            videoAspectRatio: 1.77,
                            retryCount: 0,
                            retrying: !1
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "interfaceReady",
                        value: function() {
                            var e = this.props,
                                t = this.state;
                            this.streamInfoReset(), this.devMode && console.log("components/Video - interfaceReady", t.streamInfo), ("1" === e.config.videoAutoPlay || t.available) && this.startStreamPlay()
                        }
                    }, {
                        key: "updateVideoSize",
                        value: function(e) {
                            var t = this.remoteVideo.current;
                            this.devMode && console.log("components/Video updateVideoSize", e, t);
                            var a, o = this.state;
                            if (t.videoHeight && (o.videoWidth === t.videoWidth && o.videoHeight === t.videoHeight || (o.videoWidth = t.videoWidth, o.videoHeight = t.videoHeight, o.videoHeight || (o.videoHeight = 1), this.setState({
                                    videoWidth: t.videoWidth,
                                    videoHeight: t.videoHeight
                                })), a = t.videoWidth / t.videoHeight, o.videoAspectRatio !== a && this.setState({
                                    videoAspectRatio: a
                                }), this.startTime)) {
                                var n = window.performance.now() - this.startTime;
                                this.devMode && console.log("components/Video updateVideoSize Remote Video playback setup time: " + n.toFixed(3) + "ms"), this.startTime = null
                            }
                            this.devMode && console.log("components/Video updateVideoSize " + e, o.videoWidth, o.videoHeight, a)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.devMode && console.log("components/Video componentDidMount"), this._isMounted = !0, Object(R.a)(Object(x.a)(a.prototype), "componentDidMount", this).call(this), this.interfaceReady()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.devMode && console.log("components/Video stopStreamPlay"), this._isMounted = !1, this.stopStreamPlay(), Object(R.a)(Object(x.a)(a.prototype), "componentWillUnmount", this).call(this)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t, a) {
                            var o = this.state;
                            o.available && (o.connected || o.connecting || o.retrying || (this.devMode && console.log("components/Video - componentDidUpdate: startStreamPlay"), this.startStreamPlay()))
                        }
                    }, {
                        key: "timerStart",
                        value: function() {
                            this.stats.video.bitrate = 0, this.stats.audio.bitrate = 0, this.stats.video.packetsLost = 0, this.stats.audio.packetsLost = 0, this.stats.video.qualityLimitationReason = "none", this.timer = setInterval(this.timerTick.bind(this), 2500), this.devMode && console.log("components/Video timerStart"), this.setState({
                                packetLoss: !1
                            })
                        }
                    }, {
                        key: "timerStop",
                        value: function() {
                            clearInterval(this.timer), this.devMode && console.log("components/Video timerStop"), this.setState({
                                packetLoss: !1
                            })
                        }
                    }, {
                        key: "timerTick",
                        value: function() {
                            var e = this;
                            if (this._isMounted && this.state.connected && this.peerConnection) {
                                this.peerConnection.getReceivers().forEach((function(t) {
                                    t.getStats().then((function(t) {
                                        t.forEach((function(t) {
                                            e.devMode && t.packetsLost && t.packetsLost > 0 && console.log("components/Video packetsLost ", t.packetsLost, t);
                                            var a = t.kind;
                                            if (void 0 === a && (a = t.mediaType), "inbound-rtp" == t.type && (e.stats[a].packetsLost = t.packetsLost, e.stats[a].roundTripTime = t.roundTripTime, e.stats[a].jitter = t.jitter, e.stats[a].timestampRemote = t.timestamp), "inbound-rtp" === t.type && !t.isRemote && ("video" === a || "audio" === a)) {
                                                var o = t.timestamp - e.stats[a].timestamp;
                                                o > 0 && o < 6e3 && t.bytesReceived >= e.stats[a].bytesReceived && (e.stats[a].bitrate = 8 * (t.bytesReceived - e.stats[a].bytesReceived) / o), e.stats[a].timestamp = t.timestamp, e.stats[a].bytesReceived = t.bytesReceived, e.stats[a].qualityLimitationReason = t.qualityLimitationReason
                                            }
                                        }))
                                    }))
                                }));
                                var t = n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                    name: "video"
                                }), Math.round(this.stats.video.bitrate), " kbps", "none" !== this.stats.video.qualityLimitationReason && void 0 !== this.stats.video.qualityLimitationReason ? "(limited: " + this.stats.video.qualityLimitationReason + ")" : "", this.stats.video.roundTripTime > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "clock"
                                }), this.stats.video.roundTripTime, " ") : "", this.stats.video.jitter > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "circle notch"
                                }), Math.round(1e3 * (this.stats.video.jitter + Number.EPSILON)) / 1e3, " jitter ") : "", this.stats.video.packetsLost > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "exclamation circle"
                                }), this.stats.video.packetsLost, " packets lost ") : "", n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "expand"
                                }), this.remoteVideo.current.videoWidth, "x", this.remoteVideo.current.videoHeight, " "), n.a.createElement("br", null));
                                (this.props.room.audioOnly || this.audioInterface) && (t = "");
                                n.a.Fragment, y.a;
                                this.wsConnection && n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "chain"
                                }), this.wsConnection.readyState);
                                n.a.Fragment, y.a;
                                this.peerConnection && n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "play circle"
                                }), this.peerConnection.iceConnectionState, "/", this.peerConnection.iceGatheringState, "/", this.peerConnection.signalingState);
                                var a = n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                    name: "wait"
                                }), "Measuring...");
                                (this.stats.video.bitrate > 0 || this.stats.audio.bitrate > 0) && (a = n.a.createElement("div", null, t, n.a.createElement(y.a, {
                                    name: "microphone"
                                }), Math.round(this.stats.audio.bitrate), " kbps", "none" !== this.stats.audio.qualityLimitationReason && void 0 !== this.stats.audio.qualityLimitationReason ? "(limited: " + this.stats.audio.qualityLimitationReason + ")" : "", this.stats.audio.roundTripTime > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "clock"
                                }), this.stats.audio.roundTripTime, " ") : "", this.stats.audio.jitter > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "circle notch"
                                }), Math.round(1e3 * (this.stats.audio.jitter + Number.EPSILON)) / 1e3, " jitter ") : "", this.stats.audio.packetsLost > 0 ? n.a.createElement(n.a.Fragment, null, " ", n.a.createElement(y.a, {
                                    name: "exclamation circle"
                                }), this.stats.audio.packetsLost, " packets lost ") : "", n.a.createElement("br", null), this.connectionInfo, " ", this.peerInfo)), (this.state.settingsActive || this.audioInterface) && this.setState({
                                    bitrateInfo: a
                                }), (this.stats.audio.packetsLost || this.stats.video.packetsLost) && (this.state.packetLoss || this.setState({
                                    packetLoss: !0
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = this.props,
                                o = this.txt;
                            this.devMode = a.appState.devMode;
                            var i = {};
                            if (!this.audioInterface) {
                                if (t.container) {
                                    var s = t.container.clientWidth,
                                        r = t.container.clientHeight;
                                    if (t.width !== s || t.height !== r) {
                                        r || (r = 1);
                                        var c = s / r;
                                        this.state.aspectRatio = c, this.state.width = s, this.state.height = r, this.devMode && console.log("components/Video - render: container size update")
                                    }
                                }
                                var l = t.videoWidth,
                                    d = t.videoHeight,
                                    p = 0,
                                    m = 0;
                                t.width && t.aspectRatio && t.videoAspectRatio && (t.videoAspectRatio > t.aspectRatio ? (d = (l = t.width) / t.videoAspectRatio, m = (t.height - d) / 2) : (l = (d = t.height) * t.videoAspectRatio, p = (t.width - l) / 2)), i = {
                                    position: "absolute",
                                    left: p,
                                    top: m,
                                    width: l,
                                    height: d
                                }
                            }
                            var u = "eye";
                            (a.room.audioOnly || this.audioInterface) && (u = "microphone");
                            var h = "";
                            t.settingsActive && (h = n.a.createElement("div", {
                                className: "controlsTop"
                            }, n.a.createElement(w.a, null, n.a.createElement(U.a, {
                                color: "black",
                                pointing: "right"
                            }, t.statusInfo), n.a.createElement(q.a, {
                                hidden: !0,
                                vertical: !0
                            }), n.a.createElement(b.a, {
                                compact: !0,
                                name: "reload",
                                onClick: this.onClick.bind(this),
                                loading: t.buttonDisabled,
                                disabled: t.buttonDisabled,
                                icon: !0,
                                labelPosition: "right",
                                inverted: !0
                            }, n.a.createElement(y.a, {
                                name: "redo"
                            }), t.buttonContent)), n.a.createElement(U.a, {
                                color: "black"
                            }, n.a.createElement(y.a, {
                                name: "user"
                            }), t.streamInfo.userName, " ", t.connected ? t.bitrateInfo : n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: "eye slash"
                            }), "Not Streaming"))));
                            var v = "";
                            t.packetLoss && (v = n.a.createElement("span", {
                                "data-tooltip": this.txt("Packet Loss: Download Connection Issue"),
                                "data-position": "left center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                name: "exclamation circle",
                                size: "large"
                            })));
                            var g = n.a.createElement(b.a, {
                                compact: !0,
                                name: "status",
                                size: "small",
                                inverted: !this.audioInterface || a.appState.darkMode,
                                icon: !0,
                                "data-tooltip": "Not Available",
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                color: "black",
                                name: u + " slash"
                            }));
                            t.available && (g = n.a.createElement(b.a, {
                                compact: !0,
                                name: "status",
                                size: "small",
                                inverted: !this.audioInterface || a.appState.darkMode,
                                icon: !0,
                                "data-tooltip": "Available",
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                color: "green",
                                name: u
                            }))), t.connecting && (g = n.a.createElement(b.a, {
                                compact: !0,
                                name: "status",
                                size: "small",
                                inverted: !this.audioInterface || a.appState.darkMode,
                                icon: !0,
                                "data-tooltip": "Connecting",
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                loading: !0,
                                name: "spinner"
                            }))), t.connected && (g = n.a.createElement(b.a, {
                                compact: !0,
                                name: "status",
                                size: "small",
                                inverted: !this.audioInterface || a.appState.darkMode,
                                icon: !0,
                                "data-tooltip": "Streaming",
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                name: u
                            }))), t.connected && !t.available && (g = n.a.createElement(b.a, {
                                compact: !0,
                                name: "status",
                                size: "small",
                                inverted: !this.audioInterface || a.appState.darkMode,
                                icon: !0,
                                "data-tooltip": "Terminated",
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                inverted: !0,
                                color: "orange",
                                name: u
                            })));
                            var f = n.a.createElement(n.a.Fragment, null);
                            return a.room.videoOffline && (t.available || t.connected || (f = n.a.createElement("source", {
                                src: a.room.videoOffline,
                                type: "video/mp4"
                            }))), this.audioInterface ? n.a.createElement("div", {
                                className: "panel",
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement(w.a, null, n.a.createElement(w.a.Group, {
                                inline: !0
                            }, n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(y.a, {
                                inverted: a.appState.darkMode,
                                name: "volume up"
                            })), n.a.createElement(w.a.Field, null, n.a.createElement(b.a, {
                                compact: !0,
                                name: "mute",
                                size: "small",
                                inverted: a.appState.darkMode,
                                icon: !0,
                                toggle: !0,
                                onClick: this.onClick.bind(this),
                                "data-tooltip": t.videoMuted ? o("Enable Audio") : o("Mute"),
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                name: t.videoMuted ? "volume off" : "volume up"
                            }), " ", t.videoMutedMessage)), n.a.createElement(w.a.Field, null, n.a.createElement("audio", {
                                style: {
                                    borderRadius: "3px",
                                    padding: "2px",
                                    margin: "2px"
                                },
                                id: "remoteVideo",
                                poster: a.room.snapshot,
                                ref: this.remoteVideo,
                                className: "remoteVideo",
                                muted: t.videoMuted,
                                autoPlay: !0,
                                loop: !0,
                                playsInline: !0,
                                onLoadedData: this.onLoadedData
                            })), n.a.createElement(w.a.Field, null, n.a.createElement(b.a, {
                                compact: !0,
                                size: "small",
                                name: "reload",
                                onClick: this.onClick.bind(this),
                                loading: t.buttonDisabled,
                                disabled: t.buttonDisabled,
                                icon: !0,
                                labelPosition: "right",
                                inverted: a.appState.darkMode
                            }, n.a.createElement(y.a, {
                                name: "redo"
                            }), t.buttonContent)), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, v), n.a.createElement(w.a.Field, {
                                inline: !0
                            }, n.a.createElement(U.a, {
                                size: "tiny"
                            }, n.a.createElement(y.a, {
                                name: "user"
                            }), t.streamInfo.userName, " ", t.connected ? t.bitrateInfo : n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
                                name: "eye slash"
                            }), "Not Streaming")))))) : n.a.createElement("div", {
                                className: "panel",
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, n.a.createElement("div", {
                                className: "backgroundVideo"
                            }, n.a.createElement("video", {
                                style: i,
                                id: "remoteVideo",
                                poster: a.room.snapshot,
                                ref: this.remoteVideo,
                                className: "remoteVideo",
                                muted: t.videoMuted,
                                autoPlay: !0,
                                loop: !0,
                                playsInline: !0,
                                controls: t.settingsActive,
                                onLoadedData: this.onLoadedData,
                                onLoadedMetadata: function() {
                                    return e.updateVideoSize("loadedmetadata")
                                }
                            }, f)), n.a.createElement("div", {
                                className: "controlsIcons"
                            }, v, g, n.a.createElement(b.a, {
                                compact: !0,
                                name: "settings",
                                size: "small",
                                inverted: !0,
                                icon: !0,
                                toggle: !0,
                                active: t.settingsActive,
                                onClick: this.onClick.bind(this),
                                "data-tooltip": o("Toggle Controls"),
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                name: "setting"
                            })), n.a.createElement(b.a, {
                                compact: !0,
                                name: "mute",
                                size: "small",
                                inverted: !0,
                                icon: !0,
                                toggle: !0,
                                onClick: this.onClick.bind(this),
                                "data-tooltip": t.videoMuted ? o("Enable Audio") : o("Mute"),
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                name: t.videoMuted ? "volume off" : "volume up"
                            }), " ", t.videoMutedMessage), n.a.createElement(b.a, {
                                compact: !0,
                                name: "fullscreen",
                                size: "small",
                                inverted: !0,
                                icon: !0,
                                toggle: !0,
                                onClick: this.onClick.bind(this),
                                "data-tooltip": o("Enter Fullscreen"),
                                "data-position": "bottom center"
                            }, n.a.createElement(y.a, {
                                name: "expand"
                            }))), h)
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var o = t.name,
                                n = t.value,
                                i = this.txt;
                            if ("reload" == o) switch (this.state.buttonContent) {
                                case i("Tap to Play"):
                                    this.remoteVideo.current.play(), this.state.connected ? this.setState({
                                        statusInfo: "Streaming",
                                        settingsActive: !1,
                                        buttonDisabled: !1,
                                        buttonContent: "Reload",
                                        videoMuted: "",
                                        videoMutedMessage: ""
                                    }) : this.state.connecting ? this.setState({
                                        statusInfo: "Preview. Connecting...",
                                        videoMuted: "",
                                        videoMutedMessage: ""
                                    }) : this.setState({
                                        statusInfo: "Preview",
                                        buttonContent: i("Reload"),
                                        videoMuted: "",
                                        videoMutedMessage: ""
                                    });
                                    break;
                                case i("Reload"):
                                    this.setState({
                                        buttonDisabled: !0,
                                        buttonContent: i("Reloading"),
                                        connecting: !0,
                                        connected: !1
                                    }), this.stopStreamPlay(), this.startStreamPlay()
                            }
                            if ("fullscreen" == o) {
                                this.state.fullscreen;
                                e.preventDefault(), this.requestFullscreen(this.remoteVideo.current)
                            }
                            "mute" == o && (this.state.videoMuted && (this.remoteVideo.current.muted = !1), this.setState({
                                videoMuted: !this.state.videoMuted,
                                videoMutedMessage: ""
                            })), Object(R.a)(Object(x.a)(a.prototype), "onClick", this).call(this, e, {
                                name: o,
                                value: n
                            })
                        }
                    }, {
                        key: "retryIfTimeout",
                        value: function() {
                            this.state.connected || this.playStarted || this.retriesLeft > 0 && (this.devMode && console.log("components/Video retryIfTimeout #", this.retriesLeft), this.retriesLeft--, this.stopStreamPlay(), this.setState({
                                buttonDisabled: !0,
                                buttonContent: "Auto Retry...",
                                connecting: !0,
                                connected: !1
                            }), this.startStreamPlay()), this.retryIfTimeoutSet = !1
                        }
                    }, {
                        key: "requestFullscreen",
                        value: function(e) {
                            var t = !0;
                            e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : (console.log("components/Video Fullscreen API is not supported."), t = !1), this.setState({
                                fullscreen: t
                            })
                        }
                    }, {
                        key: "streamInfoReset",
                        value: function() {
                            var e, t = this.props,
                                a = this.state;
                            (this.state.streamInfo = {
                                applicationName: t.config.application,
                                streamName: t.room.streamPlayback,
                                userName: "",
                                sessionId: "[empty]"
                            }, t.room.users) && (t.content ? (e = t.room.users[t.content.userID]) && (a.streamInfo.streamName = t.content.stream) : (e = t.room.users[t.room.streamUID]) && (a.streamInfo.streamName = t.room.streamPlayback), e && (a.streamInfo.userName = e.userName, e.meta && e.meta.connected && e.sdate < e.meta.connectedUpdate && (a.available = !0)))
                        }
                    }, {
                        key: "wsConnect",
                        value: function() {
                            var e = this,
                                t = this.props;
                            if (this.state.connected) console.log("components/Video wsConnect: already connected, skip");
                            else {
                                if (this.props.appState.wsOpen) return this.devMode && console.log("components/Video wsConnect:  websocket busy, retrying later", this.props.appState.wsComponent, " waited: " + this.wsWaited, this.wsConnection), this.wsConnection && this.wsConnection.readyState < 3 && (this.wsWaited > 1 ? (this.wsConnection.close(), this.peerConnection && this.peerConnection.close(), this.wsWaited = 0) : this.wsWaited++), void setTimeout((function() {
                                    return e.wsConnect()
                                }), 2e3);
                                this.props.appStateUpdate({
                                    wsOpen: !0,
                                    wsComponent: "Video"
                                }), this.userData = {
                                    param1: "value1",
                                    videowhisper: "webrtc-playback"
                                }, this.wsConnection && this.wsConnection.readyState < 3 && (console.log("components/Video wsConnect previous websocket (close)", this.wsConnection), this.wsConnection.close(), this.peerConnection && this.peerConnection.close()), this.wsConnection = new WebSocket(t.config.wss), this.wsConnection.binaryType = "arraybuffer", this.wsConnection.onopen = this.onopen.bind(this), this.wsConnection.onmessage = function(t) {
                                    return e.onmessage(t)
                                }, this.wsConnection.onclose = function() {
                                    e.devMode && console.log("components/Video wsConnection.onclose"), e.props.appStateUpdate({
                                        wsOpen: !1
                                    })
                                }, this.wsConnection.onerror = function(t) {
                                    console.log("components/Video ERROR wsConnection.onerror: " + JSON.stringify(t, ["message", "arguments", "type", "name"])), e.wsConnection.close(), e.props.appStateUpdate({
                                        wsOpen: !1
                                    })
                                }
                            }
                        }
                    }, {
                        key: "peerCreateAnswer",
                        value: function() {
                            this.state;
                            this.devMode && console.log("components/Video peerCreateAnswer"), this.peerConnection.createAnswer().then(this.gotDescription.bind(this)).catch(this.errorHandler.bind(this))
                        }
                    }, {
                        key: "errorHandler",
                        value: function(e) {
                            console.log(e)
                        }
                    }, {
                        key: "icecandidate",
                        value: function() {
                            var e = Object(te.a)(ee.a.mark((function e(t, a) {
                                return ee.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.devMode && console.log("components/Video icecandidate (gotIceCandidate):", a);
                                            try {
                                                this.onAddIceCandidateSuccess(t)
                                            } catch (o) {
                                                this.onAddIceCandidateError(t, o)
                                            }
                                            case 2:
                                            case "end":
                                                return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onAddIceCandidateSuccess",
                        value: function(e) {
                            this.devMode && console.log("components/Video onAddIceCandidateSuccess success", e)
                        }
                    }, {
                        key: "onAddIceCandidateError",
                        value: function(e, t) {
                            this.devMode && console.log("components/Video onAddIceCandidateError failed to add ICE Candidate: ".concat(t))
                        }
                    }, {
                        key: "onsignalingstatechange",
                        value: function() {
                            var e, t = this;
                            this._isMounted && (this.peerConnection && (e = this.peerConnection.signalingState, this.devMode && console.log("components/Video onsignalingstatechange , state: ".concat(e), this.retryTimeout), "have-remote-offer" != e && "stable" != e || (this.setState({
                                buttonDisabled: !1,
                                buttonContent: this.txt("Reload")
                            }), this.props.appStateUpdate({
                                videoStatus: "pending"
                            }), this.retryIfTimeoutSet || (setTimeout((function() {
                                return t.retryIfTimeout()
                            }), this.retryTimeout), this.retryIfTimeoutSet = !0))))
                        }
                    }, {
                        key: "videoPlay",
                        value: function() {
                            var e = this,
                                t = this.remoteVideo.current,
                                a = this.txt;
                            this.playStarted = !1, t && t.play().then((function(o) {
                                e.devMode && console.log("components/Video Autoplay started accept/paused/src", o, t.paused, t.src), e.playStarted = !0, e.props.appState.muted && e.props.appStateUpdate({
                                    muted: !1
                                }), e.state.connected ? e.setState({
                                    statusInfo: "Streaming",
                                    settingsActive: !1,
                                    buttonDisabled: !1,
                                    buttonContent: a("Reload"),
                                    connecting: !1
                                }) : e.state.connecting ? e.setState({
                                    statusInfo: "Preview. Connecting...",
                                    settingsActive: !0,
                                    buttonDisabled: !0,
                                    buttonContent: "Connecting"
                                }) : e.setState({
                                    statusInfo: "Preview",
                                    buttonDisabled: !1,
                                    buttonContent: a("Reload")
                                })
                            }), (function(o) {
                                console.log("components/Video Autoplay reject:" + o, o, t.src), e.setState({
                                    statusInfo: "Autoplay not available",
                                    settingsActive: !0,
                                    buttonDisabled: !1,
                                    buttonContent: a("Tap to Play"),
                                    videoMuted: "",
                                    videoMutedMessage: ""
                                })
                            })).catch((function(t) {
                                console.log("components/Video Autoplay error:" + t, t), e.setState({
                                    statusInfo: "Autoplay not available",
                                    settingsActive: !0,
                                    buttonDisabled: !1,
                                    buttonContent: a("Tap to Play")
                                })
                            }))
                        }
                    }, {
                        key: "iceconnectionstatechange",
                        value: function(e, t) {
                            var a, o = this,
                                n = this.remoteVideo.current,
                                i = this.state,
                                s = this.txt;
                            e && (a = e.iceConnectionState, this.devMode && console.log("components/Video iceconnectionstatechange: ".concat(e.iceConnectionState), t, n), "connected" == a && (this.setState({
                                connected: !0,
                                connecting: !1
                            }), this.videoPlay()), "disconnected" != a && "failed" != a || ("1" === this.props.config.videoAutoPlay && (i.retrying || setTimeout((function() {
                                i.retrying = !0, o.stopStreamPlay(), o.startStreamPlay(), o.setState({
                                    statusInfo: a,
                                    buttonDisabled: !0,
                                    buttonContent: s("Auto Retry")
                                })
                            }), 3300)), this.setState({
                                settingsActive: !0,
                                connected: !1,
                                connecting: !1,
                                buttonDisabled: !1,
                                buttonContent: s("Reload")
                            })))
                        }
                    }, {
                        key: "track",
                        value: function(e) {
                            this.state;
                            var t = this.remoteVideo.current;
                            this.devMode && console.log("components/Video peer track (gotRemoteTrack) kind:" + e.track.kind + " stream:" + e.streams[0]), t.srcObject !== e.streams[0] && (t.srcObject = e.streams[0], this.devMode && console.log("components/Video peer track: playback peer received new remote stream"))
                        }
                    }, {
                        key: "sendPlayGetOffer",
                        value: function() {
                            var e = this;
                            this.devMode && console.log("components/Video sendPlayGetOffer: " + JSON.stringify(this.state.streamInfo), "wsConnection:", this.wsConnection), this.state.connected && this.playStarted && this.devMode && console.log("components/Video sendPlayGetOffer: playStarted skip"), this.wsConnection && 1 === this.wsConnection.readyState && this.wsConnection.send('{"direction":"play", "command":"getOffer", "streamInfo":' + JSON.stringify(this.state.streamInfo) + ', "userData":' + JSON.stringify(this.userData) + "}"), this.setState({
                                statusInfo: "Starting Playback",
                                buttonDisabled: !1,
                                buttonContent: this.txt("Reload")
                            }), this.retryIfTimeoutSet || (setTimeout((function() {
                                return e.retryIfTimeout()
                            }), this.retryTimeout), this.retryIfTimeoutSet = !0)
                        }
                    }, {
                        key: "startStreamPlay",
                        value: function() {
                            this.devMode && console.log("components/Video startStreamPlay"), this.state.retryCount = 0, this.wsWaited = 0, this.state.connecting = !0, this.wsConnect(), this.timerStart()
                        }
                    }, {
                        key: "stopStreamPlay",
                        value: function() {
                            this.devMode && console.log("components/Video stopStreamPlay"), this.timerStop();
                            var e = this.remoteVideo.current,
                                t = this.props;
                            this.peerConnection && this.peerConnection.close(), this.wsConnection && this.wsConnection.close(), e && (e.src == t.room.videoOffline && t.room.videoOffline || (e.src = "")), this.setState({
                                buttonDisabled: !1,
                                buttonContent: this.txt("Reload"),
                                connecting: !1,
                                connected: !1
                            }), this.playStarted = !1
                        }
                    }, {
                        key: "gotDescription",
                        value: function(e) {
                            var t = this;
                            this.devMode && console.log("components/Video gotDescription sdp" + JSON.stringify({
                                sdp: e
                            })), this.peerConnection.setLocalDescription(e).then((function() {
                                t.wsConnection.send('{"direction":"play", "command":"sendResponse", "streamInfo":' + JSON.stringify(t.state.streamInfo) + ', "sdp":' + JSON.stringify(e) + ', "userData":' + JSON.stringify(t.userData) + "}")
                            })).catch((function(e) {
                                console.log("components/Video gotDescription, setLocalDescription error", e)
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var a, o = {};
                            o.streamInfo = t.streamInfo;
                            var n = !1;
                            return e.room.users && (e.content ? (a = e.room.users[e.content.userID]) && (o.streamInfo.streamName = e.content.stream) : (a = e.room.users[e.room.streamUID]) && (o.streamInfo.streamName = e.room.streamPlayback), a && a.meta && a.meta.connected && a.sdate < a.meta.connectedUpdate && (n = !0), a && (o.streamInfo.userName = a.userName)), n !== t.available ? (o.available = n, e.appState.devMode && console.log("components/Video - getDerivedStateFromProps nowAvailable", o, a), o) : null
                        }
                    }]), a
                }(N);
            ae.propTypes = {
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                appState: O.a.object.isRequired,
                appStateUpdate: O.a.func.isRequired,
                content: O.a.object,
                meta: O.a.string,
                videoConfig: O.a.object
            };
            var oe = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutPlayback",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layVideo"
                            }, n.a.createElement(ae, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                room: e.room
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                ne = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutPlaybackAudio",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layVideo"
                            }, n.a.createElement(ae, {
                                videoConfig: {
                                    audioInterface: !0
                                },
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                room: e.room
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                ie = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return this.componentActions = n.a.createRef(), n.a.createElement("div", {
                                className: "layoutWay2",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layVideo"
                            }, n.a.createElement(ae, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room
                            })), n.a.createElement("div", {
                                className: "layCamera"
                            }, n.a.createElement(A, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                se = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return this.componentActions = n.a.createRef(), n.a.createElement("div", {
                                className: "layoutWay2Audio",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layVideo"
                            }, n.a.createElement(ae, {
                                videoConfig: {
                                    audioInterface: !0
                                },
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room
                            })), n.a.createElement("div", {
                                className: "layCamera"
                            }, n.a.createElement(A, {
                                cameraConfig: {
                                    audioInterface: !0
                                },
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                re = a(131),
                ce = a.n(re),
                le = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).playerError = function(e) {
                            console.log("containers/Media playerError", e)
                        }, o.state = {
                            placement: e.placement,
                            meta: e.meta,
                            panelType: "Media",
                            mediaWidth: 0,
                            mediaHeight: 1,
                            mediaStyle: {
                                position: "absolute",
                                width: "100%",
                                height: "100%"
                            },
                            mediaAspectRatio: 1
                        }, o.devMode = e.appState.devMode, o.mediaContent = n.a.createRef(), o.extensionsImg = ["jpg", "jpeg", "jfif", "pjpeg", "pjp", "gif", "ico", "cur", "bmp", "png", "svg"], o.extensionsVideo = ["mp4", "webm", "ogg"], o.extensionsAudio = ["mp3"], o.devMode && console.log("containers/Media constructor", e), o
                    }
                    return Object(v.a)(a, [{
                        key: "updateMediaSize",
                        value: function(e) {
                            var t = this.state;
                            t.mediaHeight || (t.mediaHeight = 1), t.mediaAspectRatio = t.mediaWidth / t.mediaHeight;
                            var a = t.mediaWidth,
                                o = t.mediaHeight,
                                n = 0,
                                i = 0;
                            t.width && t.aspectRatio && t.mediaAspectRatio && (t.mediaAspectRatio > t.aspectRatio ? (o = (a = t.width) / t.mediaAspectRatio, i = (t.height - o) / 2) : (a = (o = t.height) * t.mediaAspectRatio, n = (t.width - a) / 2));
                            var s = {
                                position: "absolute",
                                left: n,
                                top: i,
                                width: a,
                                height: o,
                                border: "solid 1px #555"
                            };
                            this.setState({
                                mediaStyle: s
                            }), this.devMode && console.log("containers/Media updateMediaSize", e, t.aspectRatio, t.mediaAspectRatio, s, t)
                        }
                    }, {
                        key: "onImgLoad",
                        value: function(e) {
                            var t = e.target;
                            this.state.mediaWidth = t.naturalWidth, this.state.mediaHeight = t.naturalHeight, this.devMode && console.log("containers/Media onImgLoad", t.naturalWidth, t.naturalHeight), this.updateMediaSize("img")
                        }
                    }, {
                        key: "onVideoLoadedMetadata",
                        value: function(e) {
                            var t = e.target;
                            this.state.mediaWidth = t.videoWidth, this.state.mediaHeight = t.videoHeight, this.devMode && console.log("containers/Media onVideoLoadedMetadata", t.videoWidth, t.videoHeight), this.updateMediaSize("video")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = this.props,
                                o = n.a.createElement(C.a, {
                                    className: a.appState.className
                                }, a.placement, " / ", a.type, " - No Content.");
                            if (a.placement && a.appState.media) {
                                var i = a.appState.media[a.placement];
                                if (i) switch (i.placement = a.meta + " " + a.placement, i.type) {
                                    case "user":
                                        if (a.room.users) {
                                            var s, r = !1;
                                            (s = a.content ? a.room.users[i.userID] : a.room.users[a.room.streamUID]) && s.meta && s.meta.external && (r = !0, s.meta.connected && s.meta.connectedUpdate > s.meta.external && (r = !1)), r && (o = s.hls ? n.a.createElement(ce.a, {
                                                style: t.mediaStyle,
                                                ref: this.mediaContent,
                                                url: s.hls,
                                                muted: a.appState.muted,
                                                playing: !0,
                                                controls: !0,
                                                playsinline: !0,
                                                width: "100%",
                                                height: "100%",
                                                onError: this.playerError.bind(this)
                                            }) : n.a.createElement(C.a, {
                                                className: a.appState.className,
                                                className: a.appState.className
                                            }, a.placement, " - HLS not available for user #", i.userID)), r || (o = n.a.createElement(ae, {
                                                appState: a.appState,
                                                appStateUpdate: a.appStateUpdate,
                                                config: a.config,
                                                room: a.room,
                                                content: i,
                                                meta: a.meta
                                            }))
                                        }
                                        break;
                                    case "stream":
                                    case "video":
                                        o = n.a.createElement(ae, {
                                            appState: a.appState,
                                            appStateUpdate: a.appStateUpdate,
                                            config: a.config,
                                            room: a.room,
                                            content: i,
                                            meta: a.meta
                                        });
                                        break;
                                    case "file":
                                        o = this.extensionsImg.includes(i.ext) ? n.a.createElement("img", {
                                            style: t.mediaStyle,
                                            ref: this.mediaContent,
                                            onLoad: this.onImgLoad.bind(this),
                                            src: i.url
                                        }) : this.extensionsVideo.includes(i.ext) || this.extensionsAudio.includes(i.ext) ? n.a.createElement(ce.a, {
                                            style: t.mediaStyle,
                                            ref: this.mediaContent,
                                            url: i.url,
                                            playing: !0,
                                            controls: !0,
                                            playsinline: !0,
                                            loop: !0,
                                            onError: this.playerError.bind(this),
                                            width: "100%",
                                            height: "100%"
                                        }) : n.a.createElement(C.a, {
                                            className: a.appState.className
                                        }, this.txt("File"), ": ", n.a.createElement("b", null, i.name), " (", i.userName, ")", n.a.createElement(q.a, null), " ", n.a.createElement(b.a, {
                                            className: a.appState.className,
                                            icon: !0,
                                            labelPosition: "right",
                                            target: "_blank",
                                            href: i.url
                                        }, " ", this.txt("Open"), " ", n.a.createElement(y.a, {
                                            size: "large",
                                            name: "folder open"
                                        }), " "), " ");
                                        break;
                                    case "hls":
                                        o = n.a.createElement(ce.a, {
                                            url: i.url,
                                            playing: !0
                                        });
                                        break;
                                    case "empty":
                                        o = n.a.createElement(C.a, {
                                            className: a.appState.className
                                        }, n.a.createElement(E.a, null, a.placement, ": Empty Content Area"), " Room owner can assign content or adjust number of content areas.");
                                        break;
                                    default:
                                        o = n.a.createElement(C.a, {
                                            className: a.appState.className
                                        }, a.placement, " - Unknown type: ", i.type, " / ", a.type)
                                }
                            }
                            return n.a.createElement("div", {
                                className: "panel",
                                ref: function(t) {
                                    return e.state.container = t
                                }
                            }, o)
                        }
                    }]), a
                }(N);
            le.propTypes = {
                placement: O.a.string.isRequired,
                meta: O.a.string.isRequired,
                type: O.a.string.isRequired,
                appState: O.a.object.isRequired,
                appStateUpdate: O.a.func.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired
            };
            var de = function(e) {
                Object(f.a)(a, e);
                var t = Object(S.a)(a);

                function a(e) {
                    var o;
                    return Object(h.a)(this, a), (o = t.call(this, e)).state = {
                        panelType: "Multimedia"
                    }, o.devMode = e.appState.devMode, o.mediaItems = 1, o.devMode && console.log("containers/Multimedia constructor", e), o
                }
                return Object(v.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = this.props,
                            o = [],
                            i = Object.keys(this.props.appState.media).length,
                            s = 0;
                        for (var r in this.props.appState.media) {
                            var c = a.appState.media[a.placement],
                                l = "none";
                            if (c && (l = c.type), "user" == l && a.room.users) {
                                var d = a.room.users[c.userID],
                                    p = !1;
                                d && d.meta && d.meta.external && (p = !0, d.meta.connected && d.meta.connectedUpdate > d.meta.external && (p = !1)), p && (l = "hls")
                            }
                            o.push(n.a.createElement("div", {
                                className: "slot" + s,
                                key: "slot_" + r
                            }, n.a.createElement(le, {
                                appState: a.appState,
                                appStateUpdate: a.appStateUpdate,
                                config: a.config,
                                room: a.room,
                                user: a.user,
                                placement: r,
                                type: l,
                                meta: s + "/" + i
                            }))), s++
                        }
                        this.mediaItems = s;
                        var m = "V";
                        t.aspectRatio > 1.77 && (m = "H");
                        var u = "panel split0";
                        return this.mediaItems > 1 && (u = "panel split" + m + this.mediaItems), n.a.createElement("div", {
                            className: u,
                            ref: function(t) {
                                return e.state.container = t
                            }
                        }, o)
                    }
                }]), a
            }(N);
            de.propTypes = {
                appState: O.a.object.isRequired,
                appStateUpdate: O.a.func.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired
            };
            var pe = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutChat",
                                key: "layoutChat",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                me = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).copyToClipboard = function(e) {
                            console.log("components/Broadcast copyToClipboard", e.target.value), e.target.select(), navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(e.target.value)
                        }, o.state = {}, o.devMode = e.appState.devMode, o.devMode && console.log("components/Broadcast constructor room:", e.room), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.devMode && console.log("components/Broadcast componentWillUnmount")
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var a = t.name,
                                o = t.value;
                            this.devMode && console.log("components/Broadcast onClick", a, o, e);
                            this.state, this.props;
                            switch (a) {
                                case "closed":
                                    this.props.serverUpdate({
                                        task: "external",
                                        external: !1
                                    })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = this.txt,
                                a = [];
                            if (e.room.broadcastSettings) {
                                for (var o in e.room.broadcastSettings)
                                    if ("meta" !== o) {
                                        var i = e.room.broadcastSettings[o],
                                            s = [];
                                        for (var r in i.fields) {
                                            var c = i.fields[r];
                                            switch (c.type) {
                                                case "text":
                                                    s.push(n.a.createElement(w.a.Field, {
                                                        key: c.name
                                                    }, n.a.createElement("label", null, c.description), n.a.createElement(L.a, {
                                                        fluid: !0,
                                                        readOnly: !0,
                                                        onClick: this.copyToClipboard,
                                                        iconPosition: "left",
                                                        defaultValue: c.value
                                                    }, n.a.createElement(y.a, {
                                                        name: "copy"
                                                    }), n.a.createElement("input", null)), n.a.createElement("br", null), n.a.createElement("small", null, c.details)));
                                                    break;
                                                case "link":
                                                    s.push(n.a.createElement(w.a.Field, {
                                                        key: c.name
                                                    }, n.a.createElement(b.a, {
                                                        className: e.appState.className,
                                                        size: "small",
                                                        name: c.name,
                                                        color: c.color ? c.color : "blue",
                                                        target: "_blank",
                                                        href: c.url
                                                    }, n.a.createElement(y.a, {
                                                        name: c.icon ? c.icon : "cloud download"
                                                    }), " ", c.description), n.a.createElement("br", null), n.a.createElement("small", null, c.details)))
                                            }
                                        }
                                        a.push(n.a.createElement("div", {
                                            key: o
                                        }, n.a.createElement(E.a, {
                                            className: e.appState.className,
                                            as: "h4"
                                        }, i.name), i.details, n.a.createElement(q.a, null), n.a.createElement(w.a, {
                                            className: e.appState.className
                                        }, s), n.a.createElement(q.a, {
                                            hidden: !0
                                        })))
                                    }
                            } else a.push(n.a.createElement("p", null, "No broadcast settings available"));
                            var l = "User list not available.",
                                d = !1;
                            if (e.room.users) {
                                var p;
                                e.room ? (p = e.room.users[e.user.ID], l = "User info available.") : l = "Not in user list.";
                                var m = t("Not Available");
                                p && p.meta && p.meta.external && (m = "Started", d = !0, p.meta.connected && p.meta.connectedUpdate > p.meta.externalUpdate && (d = !1, m = "Web Broadcast More Recent")), d && (l = p.hls ? t("Streaming") : "HLS not available."), d || (l = m)
                            }
                            var u = d ? n.a.createElement("div", {
                                key: "closed"
                            }, " ", n.a.createElement(b.a, {
                                className: e.appState.className,
                                icon: !0,
                                size: "small",
                                name: "closed",
                                color: "red",
                                onClick: this.onClick.bind(this)
                            }, n.a.createElement(y.a, {
                                name: "close"
                            }), " ", t("Closed")), " ", n.a.createElement("small", null, t("Use after ending external broadcast, to faster restore web based webcam interface.")), " ") : "";
                            return n.a.createElement("div", {
                                className: "layoutScrollable",
                                key: "layoutBroadcastScroll",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layScrollable",
                                key: "layBroadcast",
                                ref: this.scrollableRef
                            }, n.a.createElement(C.a, {
                                className: e.appState.className
                            }, n.a.createElement(E.a, {
                                className: e.appState.className,
                                as: "h4"
                            }, t("External Broadcast")), n.a.createElement(U.a, {
                                color: d ? "green" : "yellow"
                            }, l), u, n.a.createElement("small", null, n.a.createElement("br", null), e.room.broadcastSettings.meta.description ? e.room.broadcastSettings.meta.description : t("External Broadcast")), n.a.createElement(q.a, null), a)))
                        }
                    }]), a
                }(N);
            me.propTypes = {
                appState: O.a.object.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var ue = a(558),
                he = a(37),
                ve = a.n(he),
                ge = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).userClick = function(e) {
                            return function(t, a) {
                                if (console.log("components/User userClick", e, a, t), e && a.action) switch (a.action) {
                                    case "profile":
                                        var n = {
                                            file: e.url
                                        };
                                        window.open(n.file);
                                        break;
                                    case "presentation":
                                        o.props.serverUpdate({
                                            task: "user_presentation",
                                            userID: e.userID,
                                            userName: e.userName,
                                            placement: a.placement
                                        });
                                        break;
                                    case "kick":
                                        o.props.serverUpdate({
                                            task: "user_kick",
                                            userID: e.userID,
                                            userName: e.userName
                                        });
                                        break;
                                    case "ban":
                                        o.props.serverUpdate({
                                            task: "user_ban",
                                            userID: e.userID,
                                            userName: e.userName
                                        })
                                }
                            }
                        }, o.state = {}, o.devMode = e.appState.devMode, o.data = [], o.usersLeft = [], o.usersJoined = [], o.userCount = 0, o.scrollableRef = n.a.createRef(), e.room.users && (o.data = ve.a.sortBy(e.room.users, "order")), o.devMode && console.log("components/Users constructor room:", e.room), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("components/Users componentWillUnmount")
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return ve.a.isEqual(e.room.users, this.props.room.users) || (this.data = ve.a.sortBy(e.room.users, "order")), !0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this.props,
                                o = (this.state, this.txt);
                            this.devMode = a.appState.devMode;
                            var i = [],
                                s = 0;
                            if (t = this.props.room.usersMenu ? n.a.createElement(C.a, {
                                    className: a.appState.className
                                }, "Users Menu") : "", this.data) {
                                for (var r in this.data)
                                    if (this.data.hasOwnProperty(r)) {
                                        var c = this.data[r];
                                        if (c && c.userName && !c.hide) {
                                            s++;
                                            var l = [];
                                            if (l.push({
                                                    key: "usermenuProfile_" + r,
                                                    onClick: this.userClick(c),
                                                    icon: "address card",
                                                    text: o("Profile"),
                                                    action: "profile"
                                                }), this.props.room.usersPresentation)
                                                for (var d in this.props.appState.media) l.push({
                                                    key: "usermenuPresentation_" + d + r,
                                                    onClick: this.userClick(c),
                                                    icon: "pointing left",
                                                    text: o("Show") + ": " + d,
                                                    action: "presentation",
                                                    placement: d
                                                });
                                            var p = n.a.createElement(I.a, {
                                                compact: !0,
                                                key: "usermenu" + r,
                                                text: c.userName,
                                                options: l,
                                                className: a.appState.className
                                            });
                                            this.props.room.usersModerator && (l.push({
                                                key: "usermenuKick_" + r,
                                                onClick: this.userClick(c),
                                                icon: "sign-out",
                                                text: o("Kick"),
                                                action: "kick"
                                            }), l.push({
                                                key: "usermenuBan_" + r,
                                                onClick: this.userClick(c),
                                                icon: "ban",
                                                text: o("Ban"),
                                                action: "ban"
                                            }));
                                            var m = n.a.createElement(n.a.Fragment, null, n.a.createElement(P.a, {
                                                src: c.avatar,
                                                rounded: !0,
                                                size: "mini",
                                                verticalAlign: "middle"
                                            }), c.userID === a.room.performerID ? n.a.createElement(y.a, {
                                                name: "star"
                                            }) : "", c.meta.connected ? n.a.createElement(y.a, {
                                                name: "video"
                                            }) : "", p);
                                            i.push(n.a.createElement(ue.a.Row, {
                                                key: "userRow" + r
                                            }, n.a.createElement(ue.a.Cell, null, m)))
                                        }
                                    }
                            } else i = n.a.createElement(ue.a.Row, {
                                key: "No_Users"
                            }, n.a.createElement(ue.a.Cell, {
                                colSpan: "1",
                                warning: !0
                            }, "No users."));
                            return e = n.a.createElement(ue.a, {
                                celled: !0,
                                selectable: !0,
                                sortable: !0,
                                key: "User_Pane",
                                className: a.appState.className
                            }, n.a.createElement(ue.a.Body, null, i)), this.userCount = s, n.a.createElement("div", {
                                className: "layoutList",
                                key: "layoutList",
                                style: {
                                    backgroundColor: a.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layScrollable",
                                key: "layScrollable",
                                ref: this.scrollableRef
                            }, e), n.a.createElement("div", {
                                className: "layMenu"
                            }, t))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t, a) {}
                    }]), a
                }(N);
            ge.propTypes = {
                appState: O.a.object.isRequired,
                appStateUpdate: O.a.func.isRequired,
                appSfx: O.a.func.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var fe = a(300),
                Se = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).handleSort = function(e) {
                            return function() {
                                o.sortBy(e, !1)
                            }
                        }, o.fileClick = function(e) {
                            return function(t, a) {
                                if (console.log("components/Files fileClick", e, a, t), e && a.action) switch (a.action) {
                                    case "open":
                                        var n = {
                                            file: e.url
                                        };
                                        window.open(n.file);
                                        break;
                                    case "delete":
                                        o.props.serverUpdate({
                                            task: "file_delete",
                                            file_name: e.name
                                        });
                                        break;
                                    case "presentation":
                                        o.props.serverUpdate({
                                            task: "file_presentation",
                                            file_name: e.name,
                                            placement: a.placement
                                        })
                                }
                            }
                        }, o.onDrop = function(e) {
                            var t = Object(g.a)(o).props;
                            if (t.config.serverURL) {
                                var a = H.a.post(t.config.serverURL);
                                a.field("task", "file_upload"), a.field("VideoWhisper[userID]", t.user.ID), a.field("VideoWhisper[sessionID]", t.user.sessionID), a.field("VideoWhisper[sessionKey]", t.user.sessionKey), t.room.ID ? (a.field("VideoWhisper[roomID]", t.room.ID), a.field("VideoWhisper[privateUID]", t.room.privateUID)) : console.log("components/Files onDrop room", t.room, t.user, t.config.serverURL);
                                var n = [];
                                e.forEach((function(e) {
                                    a.attach(e.name, e, e.name), n.push(e.name)
                                })), a.field("files[]", n), a.then(o.uploadCompleted.bind(Object(g.a)(o))), console.log("components/Files onDrop", e, a), o.setState({
                                    uploading: !0
                                })
                            } else console.log("components/Files onDrop missing serverURL", t.config.serverURL, t.config)
                        }, o.state = {
                            column: null,
                            data: null,
                            direction: null,
                            uploading: !1
                        }, o.devMode = e.appState.devMode, o.scrollableRef = n.a.createRef(), o.fileInputRef = n.a.createRef(), e.room.files && (o.state.data = e.room.files), o.devMode && console.log("components/Files constructor room:", e.room), o
                    }
                    return Object(v.a)(a, [{
                        key: "sortBy",
                        value: function(e, t) {
                            t && (this.state.column = null, this.state.direction = null);
                            var a = this.state,
                                o = a.column,
                                n = a.data,
                                i = a.direction;
                            if (n) {
                                var s = "age" == e ? "time" : e;
                                console.log("components/Files handleSort", e, s, i, t), o === e ? this.setState({
                                    data: "descending" === i ? ve.a.sortBy(n, [s]) : ve.a.sortBy(n, [s]).reverse(),
                                    direction: "ascending" === i ? "descending" : "ascending"
                                }) : this.setState({
                                    column: e,
                                    data: ve.a.sortBy(n, [s]).reverse(),
                                    direction: "descending"
                                })
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.sortBy("age", !0)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("components/Files  componentWillUnmount")
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return ve.a.isEqual(e.room.files, this.props.room.files) || (this.state.data = e.room.files, this.sortBy("age", !0)), !0
                        }
                    }, {
                        key: "uploadCompleted",
                        value: function(e) {
                            console.log("components/Files uploadCompleted", e), this.props.serverUpdate({
                                task: "update",
                                update: "files"
                            }), this.setState({
                                uploading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, o = this,
                                i = this.props,
                                s = this.state,
                                r = this.txt,
                                c = this.state,
                                l = c.column,
                                d = c.data,
                                p = c.direction;
                            return a = this.props.room.filesUpload ? n.a.createElement(fe.a, {
                                onDrop: this.onDrop
                            }, (function(e) {
                                var t = e.getRootProps,
                                    a = e.getInputProps;
                                return n.a.createElement(C.a, {
                                    className: i.appState.className
                                }, n.a.createElement("div", t(), n.a.createElement("input", a()), n.a.createElement("p", null, n.a.createElement(y.a, {
                                    name: "upload",
                                    loading: s.uploading
                                }), " ", s.uploading ? r("Uploading. Please wait...") : r("Upload: Drag and drop files here, or click to select files"))))
                            })) : "", t = d ? d.map((function(e) {
                                var t = [];
                                if (t.push({
                                        key: "filemenuOpen_" + e.name,
                                        onClick: o.fileClick(e),
                                        icon: "file",
                                        text: r("Open"),
                                        action: "open"
                                    }), o.props.room.filesDelete && t.push({
                                        key: "filemenuDelete_" + e.name,
                                        onClick: o.fileClick(e),
                                        icon: "trash",
                                        text: r("Delete"),
                                        action: "delete"
                                    }), o.props.room.filesPresentation)
                                    for (var a in o.props.appState.media) t.push({
                                        key: "filemenuPresentation_" + a + e.name,
                                        onClick: o.fileClick(e),
                                        icon: "pointing left",
                                        text: r("Show") + ": " + a,
                                        action: "presentation",
                                        placement: a
                                    });
                                var s = n.a.createElement(I.a, {
                                    key: "filemenu" + e.name,
                                    text: e.name,
                                    options: t,
                                    className: i.appState.className
                                });
                                return n.a.createElement(ue.a.Row, {
                                    key: e.name
                                }, n.a.createElement(ue.a.Cell, null, s), n.a.createElement(ue.a.Cell, null, e.size), n.a.createElement(ue.a.Cell, null, e.age))
                            })) : n.a.createElement(ue.a.Row, {
                                key: "No_Files"
                            }, n.a.createElement(ue.a.Cell, {
                                colSpan: "3",
                                warning: !0
                            }, "No files.")), e = n.a.createElement(ue.a, {
                                celled: !0,
                                selectable: !0,
                                striped: !0,
                                sortable: !0,
                                key: "File_Pane",
                                className: i.appState.className
                            }, n.a.createElement(ue.a.Header, null, n.a.createElement(ue.a.Row, null, n.a.createElement(ue.a.HeaderCell, {
                                sorted: "name" === l ? p : null,
                                onClick: this.handleSort("name")
                            }, r("Name")), n.a.createElement(ue.a.HeaderCell, {
                                sorted: "size" === l ? p : null,
                                onClick: this.handleSort("size")
                            }, r("Size")), n.a.createElement(ue.a.HeaderCell, {
                                sorted: "age" === l ? p : null,
                                onClick: this.handleSort("age")
                            }, r("Age")))), n.a.createElement(ue.a.Body, null, t)), n.a.createElement("div", {
                                className: "layoutList",
                                key: "layoutList",
                                style: {
                                    backgroundColor: i.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layScrollable",
                                key: "layScrollable",
                                ref: this.scrollableRef
                            }, e), n.a.createElement("div", {
                                className: "layMenu"
                            }, a))
                        }
                    }]), a
                }(N);
            Se.propTypes = {
                appState: O.a.object.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var be = function(e) {
                Object(f.a)(a, e);
                var t = Object(S.a)(a);

                function a(e) {
                    var o;
                    return Object(h.a)(this, a), (o = t.call(this, e)).state = {}, o.devMode = e.appState.devMode, o.devMode && console.log("components/Presentation constructor room:", e.room), o
                }
                return Object(v.a)(a, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.devMode && console.log("components/Presentation  componentWillUnmount")
                    }
                }, {
                    key: "removeMedia",
                    value: function(e, t) {
                        var a = t.name,
                            o = t.value;
                        this.devMode && console.log("components/Presentation removeMedia", a, o, e), this.props.serverUpdate({
                            task: "presentation_remove",
                            placement: o
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = this.txt,
                            a = [];
                        if (e.appState.media)
                            for (var o in e.appState.media) {
                                var i = e.appState.media[o],
                                    s = "";
                                if ("stream" === i.type) {
                                    var r = this.props.room.users[i.userID];
                                    r ? r.meta && (r.meta.connected || (s = "Not Broadcasting")) : s = "Not Available"
                                }
                                a.push(n.a.createElement("div", {
                                    key: "presentationPlacement" + o
                                }, i.default ? n.a.createElement(U.a, {
                                    pointing: "right"
                                }, t("Default")) : "empty" === i.type ? n.a.createElement(U.a, {
                                    pointing: "right"
                                }, t("Empty")) : n.a.createElement(b.a, {
                                    className: e.appState.className,
                                    size: "tiny",
                                    compact: !0,
                                    key: "removeMedia" + o,
                                    name: "removeMedia" + o,
                                    value: o,
                                    color: "red",
                                    onClick: this.removeMedia.bind(this)
                                }, " ", n.a.createElement(y.a, {
                                    name: "window close"
                                }), "Remove"), n.a.createElement("b", null, o), ": ", i.type, " ", n.a.createElement("i", null, i.name), " ", s))
                            }
                        return n.a.createElement("div", {
                            className: "layScrollable",
                            key: "layPresentation",
                            style: {
                                backgroundColor: e.appState.backgroundColor
                            },
                            ref: this.scrollableRef
                        }, n.a.createElement(C.a, {
                            className: e.appState.className
                        }, n.a.createElement(E.a, {
                            className: e.appState.className,
                            as: "h4"
                        }, t("Media Displayed"), ": ", e.room.name), n.a.createElement(q.a, null), a))
                    }
                }]), a
            }(N);
            be.propTypes = {
                appState: O.a.object.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var ye = a(552),
                ke = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).state = {
                            panelType: "Options",
                            time: 0,
                            updating: !1
                        }, o.devMode = e.appState.devMode, o.devMode && console.log("components/Options constructor room:", e.room), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.devMode && console.log("components/Options componentWillUnmount")
                        }
                    }, {
                        key: "onChange",
                        value: function(e, t) {
                            var a = "checkbox" === t.type ? t.checked : t.value,
                                o = t.name;
                            this.devMode && console.log("Components/Options onChange", o, a, t), this.props.serverUpdate({
                                task: "options",
                                name: o,
                                value: a
                            }), o && this.setState({
                                [o]: a,
                                updating: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = this.state,
                                o = [];
                            if (t.room.options) {
                                for (var i in t.room.options)
                                    if ("meta" !== i) {
                                        var s = t.room.options[i],
                                            r = [];
                                        for (var c in s.fields) {
                                            var l = s.fields[c];
                                            switch (l.type) {
                                                case "toggle":
                                                    r.push(n.a.createElement(w.a.Field, {
                                                        key: l.name
                                                    }, n.a.createElement("label", null, l.description), n.a.createElement(ye.a, {
                                                        name: l.name,
                                                        "data-position": "right center",
                                                        toggle: !0,
                                                        disabled: a.updating,
                                                        checked: a[l.name],
                                                        onChange: function(t, a) {
                                                            return e.onChange(t, a)
                                                        }
                                                    }), n.a.createElement("br", null), n.a.createElement("small", null, l.details)));
                                                    break;
                                                case "dropdown":
                                                    r.push(n.a.createElement(w.a.Group, {
                                                        key: l.name
                                                    }, n.a.createElement(w.a.Field, null, n.a.createElement("label", null, l.description), n.a.createElement(I.a, {
                                                        name: l.name,
                                                        selection: !0,
                                                        compact: !0,
                                                        className: t.appState.className,
                                                        "data-position": "right center",
                                                        value: a[l.name],
                                                        disabled: a.updating,
                                                        options: l.options,
                                                        onChange: function(t, a) {
                                                            return e.onChange(t, a)
                                                        }
                                                    }), n.a.createElement("br", null), n.a.createElement("small", null, l.details))));
                                                    break;
                                                default:
                                                    r.push(n.a.createElement("p", {
                                                        key: "noFields"
                                                    }, l.name, " Unknown Type: ", l.type))
                                            }
                                        }
                                        o.push(n.a.createElement("div", {
                                            key: i
                                        }, n.a.createElement(E.a, {
                                            className: t.appState.className,
                                            as: "h4"
                                        }, s.name), n.a.createElement(q.a, null), n.a.createElement(w.a, {
                                            className: t.appState.className
                                        }, r), n.a.createElement(q.a, {
                                            hidden: !0
                                        })))
                                    }
                            } else o.push(n.a.createElement("p", null, "No options"));
                            return n.a.createElement("div", {
                                className: "layoutScrollable",
                                key: "layoutOptionsScroll",
                                style: {
                                    backgroundColor: t.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layScrollable",
                                key: "layOptions",
                                ref: this.scrollableRef
                            }, n.a.createElement(C.a, {
                                className: t.appState.className
                            }, o)))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            return e.room.options && e.room.options.meta && e.room.options.meta.time > t.time ? (e.appState.devMode && console.log("components/Options getDerivedStateFromProps", t), a.propsToOptions(e)) : null
                        }
                    }, {
                        key: "propsToOptions",
                        value: function(e) {
                            var t = {};
                            if (e.room.options)
                                for (var a in e.room.options)
                                    if ("meta" !== a) {
                                        var o = e.room.options[a];
                                        for (var n in o.fields) {
                                            var i = o.fields[n];
                                            i && i.name && (t[i.name] = i.value)
                                        }
                                    } return e.room.options && e.room.options.meta && (t.time = e.room.options.meta.time), t.updating = !1, e.appState.devMode && console.log("components/Options propsToOptions", t), t
                        }
                    }]), a
                }(N);
            ke.propTypes = {
                appState: O.a.object.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var Ee = function(e) {
                Object(f.a)(a, e);
                var t = Object(S.a)(a);

                function a(e) {
                    var o;
                    return Object(h.a)(this, a), (o = t.call(this, e)).devMode = e.appState.devMode, o.devMode && console.log("containers/Tabs constructor", e), o.state = {
                        menus: [],
                        panes: [],
                        selected: ""
                    }, o.updatePanes(e), o
                }
                return Object(v.a)(a, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.devMode && console.log("containers/Tabs componentWillUnmount")
                    }
                }, {
                    key: "updatePanes",
                    value: function(e) {
                        var t = this.state,
                            a = this.txt,
                            o = [],
                            i = [],
                            s = "";
                        if (this.state.selected || (this.state.selected = a("Chat")), e.appState.publishRequired && e.room.panelCamera && (this.state.selected = a("Cam")), e.appState.external && this.state.selected == a("Cam") && (this.state.selected = a("Broadcast")), this.state.selected == a("Chat") && this.props.appState.chatNew && this.props.appStateUpdate({
                                chatNew: !1
                            }), s = a("Chat"), o.push({
                                key: s,
                                active: t.selected == s,
                                name: s,
                                content: n.a.createElement("div", {
                                    "data-tooltip": s,
                                    "data-position": "bottom center"
                                }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                    name: "chat"
                                }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s, " ", this.props.appState.chatNew ? n.a.createElement(y.a, {
                                    size: "tiny",
                                    name: "star",
                                    color: "green"
                                }) : "")
                            }), i.push(n.a.createElement("div", {
                                key: "paneChat",
                                className: t.selected == s ? "paneActive" : "paneInactive"
                            }, n.a.createElement(pe, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                config: e.config,
                                room: e.room,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            }))), !e.room.textOnly && e.room.panelCamera && !e.appState.external) {
                            var r = "video";
                            s = a("Cam"), (e.room.audioOnly || e.appState.audioMode) && (s = a("Mic"), r = "microphone", this.state.selected == a("Cam") && (this.state.selected = a("Mic")));
                            var c = {
                                off: n.a.createElement(y.a, {
                                    size: "tiny",
                                    name: "stop"
                                }),
                                pending: n.a.createElement(y.a, {
                                    size: "tiny",
                                    color: "orange",
                                    name: "sync"
                                }),
                                live: n.a.createElement(y.a, {
                                    size: "tiny",
                                    color: "green",
                                    name: "circle"
                                }),
                                error: n.a.createElement(y.a, {
                                    size: "tiny",
                                    color: "red",
                                    name: "exclamation triangle"
                                })
                            } [e.appState.cameraStatus];
                            o.push({
                                key: s,
                                active: t.selected == s,
                                name: s,
                                content: n.a.createElement("div", {
                                    "data-tooltip": s,
                                    "data-position": "bottom center"
                                }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                    name: r
                                }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s, " ", c)
                            }), i.push(n.a.createElement("div", {
                                key: "paneCamera",
                                className: t.selected == s ? "paneActive" : "paneInactive"
                            }, n.a.createElement(A, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                        e.room.textOnly || e.room.panelBroadcast && (s = a("Broadcast"), o.push({
                            key: s,
                            active: t.selected == s,
                            name: s,
                            content: n.a.createElement("div", {
                                "data-tooltip": s,
                                "data-position": "bottom center"
                            }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                name: "rss"
                            }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s)
                        }), t.selected == s && i.push(n.a.createElement("div", {
                            key: "paneBroadcast",
                            className: t.selected == s ? "paneActive" : "paneInactive"
                        }, n.a.createElement(me, {
                            appState: e.appState,
                            appSfx: e.appSfx,
                            user: e.user,
                            config: e.config,
                            room: e.room,
                            serverUpdate: e.serverUpdate
                        })))), e.room.panelUsers && (s = a("Users"), o.push({
                            key: s,
                            active: t.selected == s,
                            name: s,
                            content: n.a.createElement("div", {
                                "data-tooltip": s,
                                "data-position": "bottom center"
                            }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                name: "users"
                            }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s, " ", n.a.createElement(U.a, {
                                className: e.appState.className,
                                size: "tiny",
                                pointing: "left"
                            }, e.appState.userCount))
                        }), t.selected == s && i.push(n.a.createElement("div", {
                            key: "paneUsers",
                            className: t.selected == s ? "paneActive" : "paneInactive"
                        }, n.a.createElement(ge, {
                            appState: e.appState,
                            appStateUpdate: e.appStateUpdate,
                            appSfx: e.appSfx,
                            user: e.user,
                            config: e.config,
                            room: e.room,
                            serverUpdate: e.serverUpdate
                        })))), e.room.panelFiles && (s = a("Files"), o.push({
                            key: s,
                            active: t.selected == s,
                            name: s,
                            content: n.a.createElement("div", {
                                "data-tooltip": s,
                                "data-position": "bottom center"
                            }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                name: "file"
                            }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s)
                        }), t.selected == s && i.push(n.a.createElement("div", {
                            key: "paneFiles",
                            className: t.selected == s ? "paneActive" : "paneInactive"
                        }, n.a.createElement(Se, {
                            appState: e.appState,
                            appSfx: e.appSfx,
                            user: e.user,
                            config: e.config,
                            room: e.room,
                            serverUpdate: e.serverUpdate
                        })))), e.room.panelPresentation && (s = a("Presentation"), o.push({
                            key: s,
                            active: t.selected == s,
                            name: s,
                            content: n.a.createElement("div", {
                                "data-tooltip": s,
                                "data-position": "bottom center"
                            }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                name: "hand point left"
                            }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s)
                        }), t.selected == s && i.push(n.a.createElement("div", {
                            key: "panePresentation",
                            className: t.selected == s ? "paneActive" : "paneInactive"
                        }, n.a.createElement(be, {
                            appState: e.appState,
                            appSfx: e.appSfx,
                            user: e.user,
                            config: e.config,
                            room: e.room,
                            serverUpdate: e.serverUpdate
                        }), " "))), e.room.panelOptions && (s = a("Options"), o.push({
                            key: s,
                            active: t.selected == s,
                            name: s,
                            content: n.a.createElement("div", {
                                "data-tooltip": s,
                                "data-position": "bottom center"
                            }, " ", e.config.tabMenu && "icon" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : n.a.createElement(y.a, {
                                name: "settings"
                            }), e.config.tabMenu && "text" !== e.config.tabMenu && "full" !== e.config.tabMenu ? "" : s)
                        }), t.selected == s && i.push(n.a.createElement("div", {
                            key: "paneOptions",
                            className: t.selected == s ? "paneActive" : "paneInactive"
                        }, n.a.createElement(ke, {
                            appState: e.appState,
                            user: e.user,
                            config: e.config,
                            room: e.room,
                            serverUpdate: e.serverUpdate
                        }), " "))), this.state.menus = o, this.state.panes = i
                    }
                }, {
                    key: "onClick",
                    value: function(e, t) {
                        this.devMode && console.log("containers/Tabs onClick", t), this.state.selected != t.name && (this.state.selected = t.name, this.updatePanes(this.props), this.setState({
                            selected: t.name
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = this.props;
                        return this.updatePanes(t), n.a.createElement("div", {
                            className: "layoutTabs",
                            style: {
                                backgroundColor: t.appState.backgroundColor
                            }
                        }, n.a.createElement("div", {
                            className: "layMenu"
                        }, n.a.createElement(J.a, {
                            className: t.appState.className,
                            items: e.menus,
                            onItemClick: this.onClick.bind(this)
                        })), n.a.createElement("div", {
                            className: "layPane"
                        }, e.panes))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        return e.room && !t.selected && e.room.panelCamera ? {
                            selected: "Cam"
                        } : null
                    }
                }]), a
            }(N);
            Ee.propTypes = {
                appState: O.a.object.isRequired,
                appStateUpdate: O.a.func.isRequired,
                appSfx: O.a.func.isRequired,
                user: O.a.object.isRequired,
                config: O.a.object.isRequired,
                room: O.a.object.isRequired,
                fetchHistory: O.a.func.isRequired,
                sendMessage: O.a.func.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var Ce = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("containers/CollaborationScreen componentWillUnmount")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutCollaboration",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layVideo"
                            }, n.a.createElement(de, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                room: e.room,
                                user: e.user
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layTabs"
                            }, n.a.createElement(Ee, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                config: e.config,
                                room: e.room,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                Me = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutText",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layHistory"
                            }, n.a.createElement(G, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory
                            })), n.a.createElement("div", {
                                className: "laySend"
                            }, n.a.createElement(z, {
                                config: e.config,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                room: e.room,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                Re = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("containers/CollaborationTextScreen componentWillUnmount")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutCollaborationText",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layActions"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layTabs"
                            }, n.a.createElement(Ee, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                user: e.user,
                                config: e.config,
                                room: e.room,
                                messages: e.messages,
                                fetchHistory: e.fetchHistory,
                                sendMessage: e.sendMessage,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                xe = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).devMode = e.appState.devMode, o.state = {
                            privateUnavailable: !0,
                            requestStatus: "Not available"
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props, this.state;
                            this.devMode && console.log("VideoWhisper/containers/LobbyScreen componentDidMount")
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t, a) {
                            var o = this.txt,
                                n = !0,
                                i = o("Waiting for user to accept call");
                            if (e.room)
                                if (e.room.actionPrivateDisable) i = o("User disabled private requests");
                                else if (e.room.actionPrivateBusy) i = o("User is currently busy in private");
                            else if (e.room.users) {
                                e.room.users[e.appState.requestUID] ? n = !1 : i = o("User is not online, yet")
                            } else i = o("User list is not available");
                            else i = o("Room is not ready");
                            if (e.appState.requestAID && (i = o("Private call ended.")), this.state.requestStatus = i, t.privateUnavailable && !n && (this.state.privateUnavailable = !1, !e.room.privateUID && !e.appState.requestAID))
                                if (e.room.privateUID !== e.appState.requestUID) {
                                    var s = {
                                            userName: e.user.name
                                        },
                                        r = {
                                            action: "privateRequest",
                                            userID: e.user.ID,
                                            roomID: e.room.ID,
                                            targetID: e.appState.requestUID,
                                            meta: s
                                        };
                                    e.serverUpdate({
                                        task: "interaction",
                                        interaction: r
                                    }), this.devMode && console.log("VideoWhisper/containers/LobbyScreen componentDidUpdate Available", e.room)
                                } else this.devMode && console.log("VideoWhisper/containers/LobbyScreen componentDidUpdate Available but requestAID", e.appState.requestAID)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = this.txt,
                                a = this.state;
                            return n.a.createElement(C.a, {
                                className: e.appState.className
                            }, n.a.createElement(E.a, null, t("Private Call")), n.a.createElement("p", null, e.user.name, " - ", e.appState.requestUsername, " (#", e.appState.requestUID, ") / ", e.room.name, " ", n.a.createElement("br", null), " ", n.a.createElement("b", null, a.requestStatus)), n.a.createElement(b.a, {
                                className: e.appState.className,
                                size: "small",
                                key: "exit",
                                name: "videowhisper",
                                color: "red",
                                target: "_top",
                                href: e.config.exitURL
                            }, n.a.createElement("i", {
                                class: "arrow alternate circle left icon"
                            }), " ", t("Exit")))
                        }
                    }]), a
                }(N);
            xe.propTypes = {
                user: O.a.object.isRequired,
                room: O.a.object.isRequired,
                config: O.a.object.isRequired,
                appState: O.a.object.isRequired,
                serverUpdate: O.a.func.isRequired
            };
            var we = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).componentActions = n.a.createRef(), o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props;
                            return n.a.createElement("div", {
                                className: "layoutList",
                                key: "layoutList",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement("div", {
                                className: "layScrollable",
                                key: "layScrollable"
                            }, n.a.createElement(xe, {
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                appSfx: e.appSfx,
                                config: e.config,
                                room: e.room,
                                user: e.user,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })), n.a.createElement("div", {
                                className: "layMenu",
                                key: "layMenu"
                            }, n.a.createElement(Q, {
                                ref: this.componentActions,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                actions: e.actions,
                                serverUpdate: e.serverUpdate
                            })))
                        }
                    }]), a
                }(o.Component),
                Ue = function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return t.config && e in t.config.text ? t.config.text[e] : e
                        }, o.recorderStatus = function(e) {
                            switch (o.devMode && console.log("components/RecorderScreen recorderStatus", e), e) {
                                case "uploadCompleted":
                                    o.recordModalClose(), window.location.href = o.props.config.exitURL
                            }
                        }, o.recordModalClose = function() {
                            return o.setState({
                                recordModalShow: !1
                            })
                        }, o.state = {
                            recordModalShow: !0
                        }, o
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = this.txt,
                                a = this.state,
                                o = [];
                            if (e.room.actionButtons)
                                for (var i in e.room.actionButtons) {
                                    var s = e.room.actionButtons[i];
                                    o.push(n.a.createElement(b.a, {
                                        compact: !0,
                                        className: e.appState.className,
                                        icon: !0,
                                        size: "small",
                                        floated: s.floated,
                                        key: s.name,
                                        name: s.name,
                                        color: s.color,
                                        target: "_" + s.target,
                                        href: s.url,
                                        "data-tooltip": s.tooltip
                                    }, n.a.createElement(y.a, {
                                        name: s.icon
                                    }), " ", s.text))
                                }
                            return n.a.createElement("div", {
                                className: "layoutRecorder",
                                style: {
                                    backgroundColor: e.appState.backgroundColor
                                }
                            }, n.a.createElement(k.a, {
                                key: "recordModal",
                                open: a.recordModalShow,
                                closeIcon: !0,
                                onClose: this.recordModalClose,
                                size: "small",
                                basic: e.appState.darkMode
                            }, n.a.createElement(E.a, {
                                icon: "file video",
                                content: t("Record")
                            }), n.a.createElement(k.a.Content, null, n.a.createElement(B, {
                                config: e.config,
                                user: e.user,
                                room: e.room,
                                appState: e.appState,
                                appStateUpdate: e.appStateUpdate,
                                serverUpdate: e.serverUpdate,
                                recorderStatus: this.recorderStatus,
                                options: {
                                    scenario: "standalone"
                                }
                            })), n.a.createElement(k.a.Actions, null, n.a.createElement(b.a, {
                                compact: !0,
                                inverted: e.appState.darkMode,
                                color: "red",
                                onClick: this.recordModalClose
                            }, n.a.createElement(y.a, {
                                name: "remove"
                            }), " ", t("Cancel")))), o)
                        }
                    }]), a
                }(o.Component),
                Ie = a(183),
                De = a.n(Ie),
                Oe = a(184),
                Ne = a.n(Oe),
                Ae = (a(540), a(541), a(542), function(e) {
                    Object(f.a)(a, e);
                    var t = Object(S.a)(a);

                    function a(e) {
                        var o;
                        return Object(h.a)(this, a), (o = t.call(this, e)).devMode = !1, o.devModeTimer = !0, o.txt = function(e) {
                            var t = Object(g.a)(o).props;
                            return t.config && t.config.text && e in t.config.text ? t.config.text[e] : e
                        }, o.axiosConfig = {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }, o.checkMode = function(e) {
                            Object(g.a)(o).state;
                            var t = Object(g.a)(o);
                            o.devMode && console.log("VideoWhisper/containers/App checkMode:", e), De.a.post("https://" + e + ".com/l.php?j=1&pn=HTML5+Videochat&ps=Web&pu=" + escape(window.location.href) + "&u=" + escape(window.location.href) + "&pv=" + o.version, Ne.a.stringify(null), o.axiosConfig).then((function(e) {
                                t.modeProcess(e)
                            })).catch(o.modeError.bind(Object(g.a)(o)))
                        }, o.updateMedia = function() {
                            var e = Object(g.a)(o).props,
                                t = Object(g.a)(o).state;
                            e.room.media && (t.media = e.room.media), t.media.Main || (t.media.Main = {}), e.room.streamUID && (t.media.Main.type && "empty" !== t.media.Main.type || (t.media.Main.type = "user", t.media.Main.userID = e.room.streamUID, t.media.Main.stream = e.room.streamPlayback, t.media.Main.name = e.room.performer, t.media.Main.default = !0)), o.setState({
                                media: t.media
                            }), o.devMode && console.log("VideoWhisper/containers/App updateMedia", e.room.media, t.media)
                        }, o.retrieveParameters = function() {
                            var e = Object(g.a)(o),
                                t = e.state,
                                a = e.devMode,
                                n = window.VideoWhisper;
                            if (!n && !a) return o.state.error = "Missing window.VideoWhisper embed parameters! devMode?", o.state.errorMore = "Contact Support", void(o.state.errorURL = "https://videowhisper.com/tickets_submit.php");
                            a && (n || (n = {
                                serverURL: "https://demo.paidvideochat.com/wp-admin/admin-ajax.php?action=vmls_app"
                            }, o.devModeRequest && (n.requestUID = o.devModeRequest)));
                            var i = "",
                                s = !1,
                                r = !1;
                            n && (i = n.serverURL, n.checkWait && (s = n.checkWait), n.whitelabel && (r = n.whitelabel, s = !0)), o.state.serverURL = i, o.state.parametersRetrieved = !0, o.state.checkWait = s, o.state.whitelabel = r, o.state.requestUID = n.requestUID, n.requestUsername && (o.state.requestUsername = n.requestUsername), o.devMode && console.log("VideoWhisper/containers/App retrieveParameters", n, a, t)
                        }, o.serverUpdate = function(e) {
                            var t = Object(g.a)(o).state;
                            if (t.serverURL || o.retrieveParameters(), t.serverURL) {
                                e || (e = {});
                                var a = Object(g.a)(o).props;
                                if (a.user.loggedIn) {
                                    var n = {
                                        userID: a.user.ID,
                                        sessionID: a.user.sessionID,
                                        sessionKey: a.user.sessionKey,
                                        roomID: a.room.ID,
                                        privateUID: a.room.privateUID,
                                        roomActionID: a.room.actionID
                                    };
                                    e.VideoWhisper = n, e.lastMessage = a.lastMessageTimestamp, e.lastRoomUpdate = o.lastRoomUpdate, e.lastMessageID = o.lastMessageID
                                }
                                e.devMode = o.devMode, e.requestUID = o.state.requestUID, e.alreadyUpdating = o.state.serverUpdating;
                                var i = Object(g.a)(o);
                                o.state.serverUpdating && console.log("containers/App serverUpdate WARNING: Already Updating", o.state.serverUpdating), "next" == e.task && o.setState({
                                    roomLoading: !0
                                }), o.setState({
                                    serverUpdating: !0
                                }), De.a.post(o.state.serverURL, Ne.a.stringify(e), o.axiosConfig).then((function(e) {
                                    i.serverProcess(e)
                                })).catch(o.serverError.bind(Object(g.a)(o)))
                            } else o.devMode && console.log("VideoWhisper/containers/App serverUpdate : missing serverURL", t, o.devMode)
                        }, o.sendMessage = function(e) {
                            o.serverUpdate({
                                task: "message",
                                message: e
                            }), o.devMode && console.log("VideoWhisper/containers/App sendMessage:", e, o.props)
                        }, o.fetchHistory = function() {
                            var e = Object(g.a)(o).props;
                            o.serverUpdate({});
                            var t = {
                                userID: -1,
                                userName: "Test",
                                text: "Test History",
                                time: (new Date).valueOf(),
                                ID: (new Date).valueOf()
                            };
                            e.addHistory(new Array(t), (new Date).valueOf()), o.devMode && console.log("VideoWhisper/containers/App fetchHistory", e, e.messages)
                        }, o.componentScreen = n.a.createRef(), o.timeLocal = 0, o.version = "2020.08", o.lastServerUpdate = 0, o.lastRoomUpdate = 0, o.lastMessageID = 0, o.componentMounted = !1, o.timeInterval = 5e3, o.state = {
                            chatMentionMessage: 0,
                            chatMentionUser: "",
                            muted: !0,
                            optionsLoaded: !1,
                            wsOpen: !1,
                            wsComponent: "none",
                            chatNew: !1,
                            cameraStatus: "off",
                            userCount: 0,
                            screen: "LoginScreen",
                            screenTime: 0,
                            requestAID: 0,
                            requestUID: 0,
                            requestUsername: "User",
                            checkedSources: 0,
                            parametersRetrieved: !1,
                            whitelabel: !1,
                            checkWait: !1,
                            devMode: o.devMode,
                            media: {
                                Main: {}
                            },
                            darkMode: !1,
                            sfx: !1,
                            sfxError: !1,
                            audioMode: !1,
                            revealMode: !1,
                            revealWarmup: 30,
                            revealed: !1,
                            publishRequired: !1,
                            className: "",
                            backgroundColor: "#EEEEEE",
                            error: "",
                            warning: "",
                            timerOn: !1,
                            serverURL: "",
                            serverUpdating: !1,
                            mode: null,
                            checked: !1,
                            tooltip: "Free Mode: This limited functionality is provided for free. Contact VideoWhisper.com to enable full mode.",
                            tooltipURL: "https://videowhisper.com/tickets_submit.php",
                            tooltipImage: "http://videowhisper.com/media/logo64.png",
                            roomLoading: !0
                        }, o.retrieveParameters(), o.timerTimeStart = Date.now(), o.appStateUpdate = o.appStateUpdate.bind(Object(g.a)(o)), o.appSfx = o.appSfx.bind(Object(g.a)(o)), o.devMode && console.log("VideoWhisper/containers/App constructor", e, o.state), o
                    }
                    return Object(v.a)(a, [{
                        key: "appStateUpdate",
                        value: function(e) {
                            this.devMode && console.log("VideoWhisper/containers/App appStateUpdate", e), this.setState(e)
                        }
                    }, {
                        key: "appSfx",
                        value: function(e) {
                            var t = this,
                                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ((this.state.sfx || o) && (this.props.config.loaded || o) && (this.state.optionsLoaded || o)) {
                                var n = "";
                                if (null == a) {
                                    if (!this.props.config) return;
                                    if (!this.props.config.sfx) return;
                                    if (!this.props.config.sfx[e]) return void console.log("VideoWhisper/containers/App appSfx not found:", e, this.props.config.sfx, this.props.config);
                                    n = this.props.config.sfx[e]
                                } else n = a;
                                this.devMode && console.log("VideoWhisper/containers/App appSfx", e, n, this.state, this.props.config);
                                var i = document.createElement("audio");
                                i.setAttribute("src", n), i.addEventListener("canplay", (function() {
                                    var e = i.play();
                                    void 0 !== e && e.catch((function(e) {
                                        console.log("VideoWhisper/containers/App appSfx ERROR", e, n, t.state, t.props.config), i.parentNode && i.parentNode.removeChild(i), t.setState({
                                            sfx: !1,
                                            sfxError: !0
                                        })
                                    })).then((function() {
                                        t.setState({
                                            sfxError: !1
                                        }), t.state.muted && (t.state.muted = !1)
                                    }))
                                })), i.addEventListener("ended", (function() {
                                    i.parentNode && i.parentNode.removeChild(i)
                                }), !1)
                            }
                        }
                    }, {
                        key: "timerStart",
                        value: function() {
                            if (!this.devMode || this.devModeTimer) {
                                var e = this.props;
                                e.config && e.config.timeInterval && Number(e.config.timeInterval) >= 2e3 && (this.timeInterval = Number(e.config.timeInterval)), this.timer = setInterval(this.timerTick.bind(this), this.timeInterval), this.timerLocal = setInterval(this.timerTickLocal.bind(this), 1e3), this.setState({
                                    timerOn: !0
                                })
                            }
                        }
                    }, {
                        key: "timerStop",
                        value: function() {
                            clearInterval(this.timer), clearInterval(this.timerLocal), this.setState({
                                timerOn: !1
                            })
                        }
                    }, {
                        key: "timerTick",
                        value: function() {
                            this.state.serverUpdating || Date.now() - this.lastServerUpdate > 1500 && this.serverUpdate({
                                task: "tick"
                            });
                            var e = Date.now() - this.timerTimeStart;
                            this.state.time = e, this.timeLocal = e
                        }
                    }, {
                        key: "timerTickLocal",
                        value: function() {
                            this.state;
                            this.timeLocal = Date.now() - this.timerTimeStart, this.componentScreen.current && this.componentScreen.current.componentActions && this.componentScreen.current.componentActions.current.updateTime(this.timeLocal), this.state.screenTime++
                        }
                    }, {
                        key: "modeProcess",
                        value: function(e) {
                            this.state.checkedSources++, this.setState({
                                mode: e.data,
                                checked: !0
                            }), this.devMode && console.log("VideoWhisper/containers/App modeProcess:", e, this.state);
                            var t = !0;
                            if (this.state.whitelabel && this.state.whitelabel != e.data.whitelabel && (t = !1), e.data.text && (this.state.tooltip = e.data.text), e.data.link && (this.state.tooltipURL = e.data.link), e.data.image && (this.state.tooltipImage = e.data.image), this.state.checkWait)
                                if (t) {
                                    var a = window.VideoWhisper;
                                    this.serverUpdate({
                                        task: "login",
                                        VideoWhisper: a
                                    })
                                } else console.log("VideoWhisper/containers/App modeProcess: checkWait but not Whitelabel", this.state.whitelabel, e.data.whitelabel);
                            2 == this.state.mode.status && this.setState({
                                error: "License Error: " + this.state.mode.message,
                                errorMore: "Contact Support",
                                errorURL: "https://videowhisper.com/tickets_submit.php"
                            })
                        }
                    }, {
                        key: "modeError",
                        value: function(e) {
                            this.state.checkedSources++, console.log("VideoWhisper/containers/App checkMode modeError:", e), this.state.checked || this.state.checkedSources > 2 && this.setState({
                                error: "License activation error!",
                                errorMore: "Contact Support",
                                errorURL: "https://videowhisper.com/tickets_submit.php"
                            })
                        }
                    }, {
                        key: "serverProcess",
                        value: function(e) {
                            var t = this.state;
                            this.setState({
                                serverUpdating: !1
                            });
                            var a = e.data;
                            if (this.devMode && "tick" !== a.task && console.log("containers/App serverProcess", e), a.VideoWhisper) {
                                if (a.error && (console.log("VideoWhisper/containers/App serverProcess Error: data.error", a.error), this.timerStop(), this.setState({
                                        error: a.error
                                    })), a.warning && (this.devMode && console.log("VideoWhisper/containers/App serverProcess Warning", a.warning), this.setState({
                                        warning: a.warning
                                    }), "next" === a.task && this.setState({
                                        roomLoading: !1
                                    })), a.user && (a.user.loggedIn ? a.config && (this.props.setConfig(a.config), this.timerStart(), a.config.darkMode && this.setState({
                                        darkMode: !0
                                    }), a.config.sfx && (this.state.sfxError || this.setState({
                                        sfx: !0
                                    }))) : (a.user.failed = !0, a.user.warning = "Login failed!"), a.user.options && ("undefined" !== typeof a.user.options.h5v_dark && t.darkMode != a.user.options.h5v_dark && this.setState({
                                        darkMode: a.user.options.h5v_dark
                                    }), "undefined" !== typeof a.user.options.h5v_sfx && this.state.sfx != a.user.options.h5v_sfx && (this.state.sfxError && !this.state.sfx || this.setState({
                                        sfx: a.user.options.h5v_sfx
                                    })), "undefined" !== typeof a.user.options.h5v_audio && t.audioMode != a.user.options.h5v_audio && this.setState({
                                        audioMode: a.user.options.h5v_audio
                                    }), "undefined" !== typeof a.user.options.h5v_reveal && t.revealMode != a.user.options.h5v_reveal && this.setState({
                                        revealMode: a.user.options.h5v_reveal
                                    }), "undefined" !== typeof a.user.options.h5v_reveal_warmup && t.revealWarmup != a.user.options.h5v_reveal_warmup && this.setState({
                                        revealWarmup: a.user.options.h5v_reveal_warmup
                                    }), this.state.optionsLoaded || this.setState({
                                        optionsLoaded: !0
                                    }), this.devMode && console.log("VideoWhisper/containers/App serverProcess data.user.options", a.user.options, this.state.sfx, this.state)), this.props.setUser(a.user)), a.room) {
                                    this.updateUsers(a.room.users), a.room.actionID && (this.state.requestAID = a.room.actionID), this.props.setRoom(a.room), this.setState({
                                        roomLoading: !1
                                    });
                                    var o = [],
                                        n = "";
                                    if (!t.checked || t.checked && t.mode.text) {
                                        var i = t.tooltip;
                                        t.mode && t.mode.text && (i = t.mode.text), n = "", t.mode && t.mode.image && (n = t.mode.image), o.push({
                                            userID: -1,
                                            userName: "VideoWhisper.com",
                                            notification: !0,
                                            text: i,
                                            image: n,
                                            modeText: !0,
                                            time: (new Date).valueOf() - 1,
                                            ID: 0xe8d4a51001
                                        })
                                    }
                                    n = "", this.props.room.welcomeImage && (n = this.props.room.welcomeImage), o.push({
                                        userID: -1,
                                        userName: this.props.room.name,
                                        notification: !0,
                                        text: this.props.room.welcome,
                                        image: n,
                                        time: (new Date).valueOf(),
                                        ID: 0xe8d4a51002
                                    }), this.props.setHistory(o, 0), this.updateMedia()
                                }
                                a.roomUpdate && (this.updateUsers(a.roomUpdate.users), this.props.updateRoom(a.roomUpdate), a.roomUpdate.media && this.updateMedia(), this.lastRoomUpdate = a.roomUpdate.updated, a.roomUpdate.actionID && (this.state.requestAID = a.roomUpdate.actionID)), (a.room || a.roomUpdate) && this.updateExternal(), a.messages && a.messages.length > 0 && this.props.addHistory(a.messages, a.timestamp), "undefined" !== typeof a.lastMessageID && a.lastMessageID > this.lastMessageID && (this.appSfx("message"), this.setState({
                                    chatNew: !0
                                }), this.devMode && console.log("VideoWhisper/containers/App serverProcess new message", a.lastMessageID, this.lastMessageID)), "undefined" !== typeof a.lastMessageID && a.lastMessageID > this.lastMessageID && (this.lastMessageID = a.lastMessageID), a.actions && a.actions.length > 0 && this.props.setActions(a.actions, a.timestamp), this.lastServerUpdate = Date.now()
                            } else console.log("VideoWhisper/containers/App serverProcess Error: no data.VideoWhisper", a.VideoWhisper)
                        }
                    }, {
                        key: "updateUsers",
                        value: function(e) {
                            if (null != e) {
                                var t, a, o = this.props,
                                    n = 0;
                                for (var i in e) e[i].hide || n++;
                                if (this.setState({
                                        userCount: n
                                    }), this.usersJoined = [], e)
                                    for (var s in e) {
                                        t = e[s];
                                        var r = !1;
                                        if (o.room.users)
                                            for (var c in o.room.users) a = o.room.users[c], t.userName == a.userName && t.userID == a.userID && (r = !0);
                                        r || this.usersJoined.push(t)
                                    }
                                if (this.usersLeft = [], o.room.users)
                                    for (var c in o.room.users) {
                                        a = o.room.users[c];
                                        r = !1;
                                        if (e)
                                            for (var s in e)(t = e[s]).userName == a.userName && t.userID == a.userID && (r = !0);
                                        r || this.usersLeft.push(t)
                                    }
                                n > 1 && this.usersJoined && this.usersJoined.length > 0 && (this.appSfx("hello"), this.usersJoined = []), this.usersLeft && this.usersLeft.length > 0 && (this.appSfx("leave"), this.usersLeft = [])
                            }
                        }
                    }, {
                        key: "updateExternal",
                        value: function() {
                            var e, t = this.props,
                                a = !1;
                            t.room.users && t.user.ID && ((e = t.room.users[t.user.ID]) && e.meta && e.meta.external && (a = !0, e.meta.connected && e.meta.connectedUpdate > e.meta.externalUpdate && (a = !1)));
                            a != this.state.external && (this.devMode && console.log("VideoWhisper/containers/App updateExternal", a), this.setState({
                                external: a
                            }))
                        }
                    }, {
                        key: "serverError",
                        value: function(e) {
                            console.log("containers/App serverUpdate Error:", e), this.setState({
                                error: "Web request error!"
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.componentMounted = !0, this.devMode && console.log("VideoWhisper/containers/App componentDidMount", this.props)
                        }
                    }, {
                        key: "onClick",
                        value: function(e, t) {
                            var a = t.name,
                                o = t.value;
                            switch (this.devMode && console.log("VideoWhisper/containers/App onClick", a, o, e), a) {
                                case "closeError":
                                    this.setState({
                                        error: "",
                                        errorMore: "",
                                        errorURL: ""
                                    }), this.timerStart();
                                    break;
                                case "reloadError":
                                    window.location.reload();
                                    break;
                                case "closeWarning":
                                    this.setState({
                                        warning: "",
                                        warningMore: "",
                                        warningURL: ""
                                    });
                                    break;
                                default:
                                    this.devMode && console.log("VideoWhisper/containers/App onClick UNHANDLED", a, o, e)
                            }
                        }
                    }, {
                        key: "screenRouter",
                        value: function() {
                            var e = this.sendMessage,
                                t = this.fetchHistory,
                                a = this.props,
                                o = this.serverUpdate,
                                i = this.state,
                                s = this.checkMode,
                                r = "LoginScreen";
                            switch (a.user.loggedIn && (r = a.room.screen ? a.room.screen : "Way2Screen", this.devMode && this.devScreen && (r = this.devScreen), i.requestUID && !a.room.privateUID && (r = "LobbyScreen")), this.state.screen != r && (this.state.screenTime = 0, "Way2Screen" == r && i.revealMode && (this.state.publishRequired = !0)), this.state.screen = r, r) {
                                case "LoginScreen":
                                    return n.a.createElement(M, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        serverUpdate: o,
                                        checkMode: s,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        key: "screen"
                                    });
                                case "BroadcastScreen":
                                    return n.a.createElement(X, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "BroadcastAudioScreen":
                                    return n.a.createElement(Z, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "PlaybackScreen":
                                    return n.a.createElement(oe, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "PlaybackAudioScreen":
                                    return n.a.createElement(ne, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "LobbyScreen":
                                    return n.a.createElement(we, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "Way2Screen":
                                    return n.a.createElement(ie, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "Way2AudioScreen":
                                    return n.a.createElement(se, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "TextScreen":
                                    return n.a.createElement(Me, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "CollaborationScreen":
                                    return n.a.createElement(Ce, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "CollaborationTextScreen":
                                    return n.a.createElement(Re, {
                                        ref: this.componentScreen,
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        messages: a.messages,
                                        actions: a.actions,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        appSfx: this.appSfx,
                                        fetchHistory: t,
                                        sendMessage: e,
                                        serverUpdate: o,
                                        key: "screen"
                                    });
                                case "RecorderScreen":
                                    return n.a.createElement(Ue, {
                                        user: a.user,
                                        config: a.config,
                                        room: a.room,
                                        appState: i,
                                        appStateUpdate: this.appStateUpdate,
                                        serverUpdate: o,
                                        key: "screen"
                                    })
                            }
                        }
                    }, {
                        key: "preRender",
                        value: function() {
                            var e = this.state;
                            e.darkMode ? (e.className = "inverted", e.backgroundColor = "#333333") : (e.className = "", e.backgroundColor = "#EEEEEE")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.preRender();
                            var e = this.state,
                                t = this.props,
                                a = this.txt,
                                o = [];
                            if ("" !== e.error) {
                                var i = "";
                                e.errorMore && (i = n.a.createElement(b.a, {
                                    color: "blue",
                                    name: "more",
                                    target: "_more",
                                    href: e.errorURL
                                }, n.a.createElement(y.a, {
                                    name: "help"
                                }), e.errorMore)), o.push(n.a.createElement(k.a, {
                                    key: "error",
                                    open: !0,
                                    size: "small"
                                }, n.a.createElement(E.a, {
                                    icon: "warning sign",
                                    content: a("Error")
                                }), n.a.createElement(k.a.Content, null, this.state.error), n.a.createElement(k.a.Actions, null, i, n.a.createElement(b.a, {
                                    color: "green",
                                    name: "reloadError",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "sync"
                                }), "  ", a("Reload")), n.a.createElement(b.a, {
                                    color: "yellow",
                                    name: "closeError",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "check"
                                }), " ", a("Ignore")), n.a.createElement(b.a, {
                                    color: "red",
                                    name: "exitError",
                                    target: "_top",
                                    href: t.config.exitURL
                                }, a("Exit"), " ", n.a.createElement(y.a, {
                                    name: "arrow right"
                                })))))
                            }
                            if ("" !== e.warning) {
                                i = "";
                                e.warningMore && (i = n.a.createElement(b.a, {
                                    color: "orange",
                                    name: "more",
                                    target: "_more",
                                    href: e.warningURL
                                }, n.a.createElement(y.a, {
                                    name: "help"
                                }), e.warningMore)), o.push(n.a.createElement(k.a, {
                                    key: "warning",
                                    open: !0,
                                    size: "small"
                                }, n.a.createElement(E.a, {
                                    icon: "warning sign",
                                    content: a("Warning")
                                }), n.a.createElement(k.a.Content, null, this.state.warning), n.a.createElement(k.a.Actions, null, i, n.a.createElement(b.a, {
                                    color: "green",
                                    name: "closeWarning",
                                    onClick: this.onClick.bind(this)
                                }, n.a.createElement(y.a, {
                                    name: "check"
                                }), " ", a("Close")))))
                            }
                            return o.push(this.screenRouter()), n.a.createElement("div", {
                                id: "appContainer",
                                style: {
                                    backgroundColor: this.state.backgroundColor
                                }
                            }, o)
                        }
                    }]), a
                }(n.a.Component)),
                je = Object(r.b)((function(e) {
                    return {
                        config: e.app.config,
                        user: e.app.user,
                        room: e.app.room,
                        messages: e.app.messages,
                        actions: e.app.actions,
                        lastMessageTimestamp: e.app.lastMessageTimestamp
                    }
                }), (function(e) {
                    return this.devMode && console.log("VideoWhisper/containers/App mapDispatchToProps", e), {
                        setUser: function(t) {
                            return e(function(e) {
                                return {
                                    type: "App/UPDATE_USER",
                                    payload: {
                                        user: e
                                    }
                                }
                            }(t))
                        },
                        setConfig: function(t) {
                            return e(function(e) {
                                return {
                                    type: "App/SET_CONFIG",
                                    payload: {
                                        config: e
                                    }
                                }
                            }(t))
                        },
                        setRoom: function(t) {
                            return e(function(e) {
                                return {
                                    type: "App/SET_ROOM",
                                    payload: {
                                        room: e
                                    }
                                }
                            }(t))
                        },
                        updateRoom: function(t) {
                            return e(function(e) {
                                return {
                                    type: "App/UPDATE_ROOM",
                                    payload: {
                                        room: e
                                    }
                                }
                            }(t))
                        },
                        addMessage: function(t) {
                            return e(function(e) {
                                return {
                                    type: "App/ADD_MESSAGE",
                                    payload: {
                                        message: e
                                    }
                                }
                            }(t))
                        },
                        addHistory: function(t, a) {
                            return e(function(e, t) {
                                return {
                                    type: "App/ADD_HISTORY",
                                    payload: {
                                        messages: e,
                                        timestamp: t
                                    }
                                }
                            }(t, a))
                        },
                        setActions: function(t, a) {
                            return e(function(e, t) {
                                return {
                                    type: "App/SET_ACTIONS",
                                    payload: {
                                        actions: e,
                                        timestamp: t
                                    }
                                }
                            }(t, a))
                        },
                        setHistory: function(t, a) {
                            return e(function(e, t) {
                                return {
                                    type: "App/SET_HISTORY",
                                    payload: {
                                        messages: e,
                                        timestamp: t
                                    }
                                }
                            }(t, a))
                        }
                    }
                }))(Ae);
            window.store = u;
            var Te = n.a.createElement(r.a, {
                store: u
            }, n.a.createElement(je, null));
            s.a.render(Te, document.getElementById("videowhisperVideochat"))
        }
    },
    [
        [311, 1, 2]
    ]
]);