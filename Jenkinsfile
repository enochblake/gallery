pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Make sure npm is available in the environment
                sh 'npm install'
            }
        }
        stage('Deploy to Render') {
            steps {
                // Add your deployment steps here
            }
        }
    }
    post {
        failure {
            echo 'Build failed!'
        }
    }
}
