module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId 'aca5d87b-f933-4656-89a1-00780ec1c4b2'
                        beaconUrl 'https://bf32174uuu.bf.dynatrace.com/mbeacon'
                    }
                    userOptIn true
                    agentBehavior.startupLoadBalancing true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>aca5d87b-f933-4656-89a1-00780ec1c4b2</string>
        <key>DTXBeaconURL</key>
        <string>https://bf32174uuu.bf.dynatrace.com/mbeacon</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <true/>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        `
    }
}