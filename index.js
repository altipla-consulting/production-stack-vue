
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'


export default {
  install(app, options) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn: options.sentryDSN,
        integrations: [
          new VueIntegration({
            Vue: app,
            logErrors: true,
          }),
        ],
      })
    }
  },
}
