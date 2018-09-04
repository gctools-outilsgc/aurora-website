import React from "react";
import renderer from "react-test-renderer";
import Header from "../src/components/header";
import { I18nextProvider } from 'react-i18next';
import i18n from '../__mocks__/i18nForTesting';



// Note: 'it' is an alias of test and is often used in examples
test('index test', done => {
  
  const component = renderer.create(
    <I18nextProvider i18n={ i18n }>
      <Header siteTitle="Aurora"/>
    </I18nextProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  i18n.changeLanguage("fr"); // not sure if this does anything going to have to check it out tuesday
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  done();

});