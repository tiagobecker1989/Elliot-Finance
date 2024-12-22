# Crypto Analysis System

An automated cryptocurrency analysis system that monitors multiple trading pairs across different exchanges and generates trading signals based on technical indicators.

## Features

- Real-time analysis of BTC/USDT, SOL/USDT, ETH/USDT, and USDT/BRL
- Support for Binance, KuCoin, OKX, and Pionex exchanges
- Technical indicators: EMA, TRIX, RSI, and MACD
- Automated hourly analysis
- Comprehensive logging system

## Prerequisites

- Node.js 18 or higher
- PM2 (for production deployment)
- API keys for supported exchanges

## Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your exchange API keys
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

```bash
npm start
```

## Production Deployment

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```

2. Start the application:
   ```bash
   pm2 start ecosystem.config.js --env production
   ```

3. Monitor the application:
   ```bash
   pm2 monit
   ```

4. View logs:
   ```bash
   pm2 logs crypto-analysis
   ```

## Logging

Logs are stored in:
- Trading signals: /var/log/crypto-analysis/trading-signals.log
- Error logs: /var/log/crypto-analysis/err.log
- Output logs: /var/log/crypto-analysis/out.log

## Environment Variables

See `.env.example` for required environment variables.