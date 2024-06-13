import Page from '../../layouts/Page';
import AppHeader from '../../elements/AppHeader';
import Content from '../../layouts/Content';

function Error() {
  return (
    <Page>
      <Content
        title="Erreur"
        text="Nous sommes désolé, Une erreur s'est produite."
      />
    </Page>
  );
}

export default Error;
