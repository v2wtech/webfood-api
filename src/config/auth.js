require('dotenv').config();
const passport    = require('passport');
const passportJWT = require('passport-jwt');

const { Employee } = require('../app/models');

let ExtractJwt  = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions  = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET;

let strategy = new JwtStrategy(jwtOptions, (payload, next) => {
  let user = Employee.getEmployee({ id: payload.id });

  next(null, user || false);
});

passport.use(strategy);

module.exports = {
  passport,
  jwtOptions
};
