
import * as Sentry from '@sentry/vue'
import { ExtraErrorData } from '@sentry/integrations'


export default {
  install(app, { sentryDSN = '', version = 'dev' }) {
    if (import.meta.env.PRODUCTION && sentryDSN) {
      Sentry.init({
        Vue: app,
        dsn: sentryDSN,
        release: version,
        logErrors: true,
        integrations: [
          new ExtraErrorData,
        ],
      })
    }
  },
}
