import { getLocale } from 'next-intl/server';

class LocaleService {
  static getCurrentLocale() {
    return getLocale().then;
  }
}

export default LocaleService;
