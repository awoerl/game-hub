
class Foo {

  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  static bar = () => {
    return 'Bar';
  }

  foobar = function() {
    return 'Foobar';
  }
}

export default Foo;

