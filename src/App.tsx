import GlobalStyle from "./globalStyles.ts";
import PageLayout from "./components/page-layout/index.tsx";
import { Grid, Column } from "./components/grid/Styles.tsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Grid>
          <Column sm={2} md={3} lg={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime quidem! Unde ratione
              consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero laboriosam dolorum eos
              quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime
              quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero
              laboriosam dolorum eos quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Inventore, maxime quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae
              debitis molestiae quam vero laboriosam dolorum eos quod iste tempore, natus est.
            </p>
          </Column>
          <Column sm={2} md={3} lg={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime quidem! Unde ratione
              consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero laboriosam dolorum eos
              quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime
              quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero
              laboriosam dolorum eos quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Inventore, maxime quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae
              debitis molestiae quam vero laboriosam dolorum eos quod iste tempore, natus est.
            </p>
          </Column>
          <Column sm={2} md={3} lg={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime quidem! Unde ratione
              consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero laboriosam dolorum eos
              quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime
              quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae debitis molestiae quam vero
              laboriosam dolorum eos quod iste tempore, natus est. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Inventore, maxime quidem! Unde ratione consequatur reiciendis. Quasi consequuntur, recusandae
              debitis molestiae quam vero laboriosam dolorum eos quod iste tempore, natus est.
            </p>
          </Column>
        </Grid>
      </PageLayout>
    </>
  );
}
