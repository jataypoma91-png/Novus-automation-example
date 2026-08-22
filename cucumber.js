module.exports = {
 default: {
   require: [
     'tests/steps/**/*.ts',
     'tests/hooks/**/*.ts',
     'tests/support/**/*.ts'

   ],
   requireModule: ['ts-node/register'],
   format: ['progress'],
   paths: ['tests/features/**/*.feature'],
    publishQuiet: true,
    parallel: 1,
   timeout: 30000
 }
};


 

  

