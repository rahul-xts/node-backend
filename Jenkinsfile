pipeline {
    agent any
    environment {
        NODE_DIR = "/var/www/html/node-backend"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/rahul-xts/node-backend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cp -r * $NODE_DIR && cd $NODE_DIR && npm install'
            }
        }
        stage('Restart Node.js') {
            steps {
                sh 'pm2 restart all || pm2 start $NODE_DIR/server.js --name node-app'
            }
        }
    }
}
