import Fortune from '../fortune';
import Message from '../message';

const { methods, errors: { BadRequestError } } = Fortune;

export default {
  name: String,
  description: String,
  avatar: String,

  // Associations
  serviceAccounts: [ Array('serviceAccount'), 'serviceAccounts' ]
};

const accountHooks = [
  function accountInput(context, record, update) {
    const { request: { method } } = context;
    switch (method) {
      case methods.create:
        const { name } = record;
        if (!name) {
          const errorMessage = Message('MissingField', 'en', { field: 'name' });
          throw new BadRequestError(errorMessage);
        }
        return context
          .transaction
          .find('account', null, { match: { name }})
          .then((accounts) => {
            if (accounts.length > 0) {
              const [ account ] = accounts;
              return account;
            } else {
              return record;
            }
        });
    }
  }
];

export accountHooks;
