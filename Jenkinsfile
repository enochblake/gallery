pipeline {
    agent any
    tools {
        nodejs 'nodejs'   // Ensure this name matches your Global Tool Configuration
    }

    environment {
        GIT_TRACE = '1'
        GIT_HTTP_LOW_SPEED_LIMIT = '0'
        GIT_HTTP_LOW_SPEED_TIME = '999999'
        GIT_CURL_VERBOSE = '1'
    }

    stages {
        stage('Node Version') {
            steps {
                echo 'Checking Node.js version...'
                sh 'node --version'
            }
        }
        stage('Clone repo') {
            steps {
                echo 'Cloning the repository...'
                git credentialsId: 'gitcredentials', url: 'git@github.com:enochblake/gallery.git'
            }
        }
        stage('Install Npm') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
                sh 'npm install mongodb'
                sh 'npm install -g webpack'
            }
        }
        stage('Build') {
            steps {
                echo 'Running the build...'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                timeout(time: 5, unit: 'MINUTES') {  // Timeout to avoid infinite waiting
                    sh 'node server.js'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
