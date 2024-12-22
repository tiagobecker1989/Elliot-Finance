export default {
  apps: [{
    name: 'crypto-analysis',
    script: 'src/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      LOG_LEVEL: 'info'
    },
    error_file: '/var/log/crypto-analysis/err.log',
    out_file: '/var/log/crypto-analysis/out.log',
    time: true
  }]
};