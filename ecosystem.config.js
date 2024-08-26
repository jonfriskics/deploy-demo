module.exports = {
  apps : [{
    name: 'deploy-demo',
    script: './src/app.mjs',
    watch: './src',
    ignore_watch: './node_modules',
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
  }]
};