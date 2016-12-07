# FAQ

## What about Moment.js?

Moment.js is a great library, but it has a few problems that motivated me to start this project:

- Moment.js is mutable and it causes bugs ([hello `clone`](http://momentjs.com/docs/#/parsing/moment-clone/)).
- Complex OOP API (which doubles mutability problem). Here is an example: https://github.com/moment/moment/blob/develop/src/test/moment/add_subtract.js#L244-L286. Moment.js allows to use `a.subtract('ms', 50)`, `a.subtract(50, 'ms')` and even `a.subtract('s', '50')`.
- Performance:
    - General performance (in comparison with native `Date`, Moment.js has a huge performance overhead because of complex API).
    - [Build size](https://github.com/webpack/webpack/issues/3128).

Also date-fns works with the native date type: no extra dependencies for `propTypes` in `React`, Sinon.js works out of the box (and other mocking tools), and so on.

date-fns cons is:

- Just 7 locales supported ([help is welcome!](https://date-fns.org/docs/I18n#adding-new-language)).
- No alternative to [Moment Timezone](http://momentjs.com/timezone/) ([yet](https://github.com/date-fns/date-fns/issues/180#issuecomment-264932949)).

Functionality-wise date-fns equals to Moment.js.

## It's easy to switch from Moment.js?

date-fns has mostly compatible

 the `format`  mimics Moment.js API. However, date-fns could miss something that exists in modern `Date.prototype`, like `toISOString`.  https://date-fns.org/docs/distanceInWords
