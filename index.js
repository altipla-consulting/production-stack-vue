
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration, ExtraErrorData } from '@sentry/integrations'


export default {
  install(app, { sentryDSN = '', version = 'dev' }) {
    if (process.env.NODE_ENV === 'production' && sentryDSN) {
      Sentry.init({
        dsn: sentryDSN,
        release: version,
        integrations: [
          new VueIntegration({
            Vue: app,
            logErrors: true,
          }),
          new ExtraErrorData,
        ],
      })
    }
  },
}
