import { Card, Grid, Page, Snippet } from '@geist-ui/react'

export default function Index() {
  return (
    <Page size="small">
      <Page.Header>
        <h1>Header</h1>
      </Page.Header>
      <Page.Content>
        <h2>Hello, Everyone.</h2>
        <p>This is a simulated page</p>
        <Snippet text="yarn add @geist-ui/react" width="100%" />

        <Grid.Container gap={2} justify="center">
          <Grid xs={6}>
            <Card shadow>
              <h4>The Evil Rabbit</h4>
              <p>shadow card.</p>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card shadow>
              <h4>The Evil Rabbit</h4>
              <p>shadow card.</p>
            </Card>
          </Grid>
        </Grid.Container>
        

      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>    
  );
}
