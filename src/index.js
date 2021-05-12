import vars from './config/vars';
import app from './config/express';

const { port, env } = vars;

app.listen(port, () => console.log(`server started on port ${port} (${env})`));
