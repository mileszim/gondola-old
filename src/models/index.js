import Account, { accountHooks } from './account';
import Keyword, { keywordHooks } from './keyword';
import Post, { postHooks } from './post';
import ServiceAccount, { serviceAccountHooks } from './service_account';
import Service, { serviceHooks } from './service';

const models = {
  account: Account,
  keyword: Keyword,
  post: Post,
  serviceAccount: ServiceAccount,
  service: Service
};

const hooks = {
  account: accountHooks,
  keyword: keywordHooks,
  post: postHooks,
  serviceAccount: serviceAccountHooks,
  service: serviceHooks
};

export { models, hooks };
