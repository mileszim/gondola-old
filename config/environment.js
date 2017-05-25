import dotenv from 'dotenv';

// Get environment
dotenv.config({ path: './' });

// Setup environment
let ENV = {
  
};

// Development
if (process.env.ENVIRONMENT === 'development') {
  ENV.environment = 'devepment';
}

// Production
if (process.env.ENVIRONMENT === 'production') {
  ENV.environment = 'production';
}
