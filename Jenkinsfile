pipeline {
    agent any
    tools {
        nodejs 'nodejs'   // Ensure this name matches your Global Tool Configuration
    }
    environment {
        DEPLOY_HOOK_URL = 'https://api.render.com/deploy/srv-cron5caj1k6c739kp9l0?key=tM_Qi50T9LQ' 
      
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
                git credentialsId: 'gitcredentials', url: 'https://github.com/enochblake/gallery'
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
        stage('Deploy to Render122') {
            steps {
                script {
                    def response = sh(script: """
                        curl -X POST ${DEPLOY_HOOK_URL}
                    """, returnStdout: true).trim()
                    
                    echo "Deployment Response: ${response}"
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

// https://api.render.com/deploy/srv-cron5caj1k6c739kp9l0?key=tM_Qi50T9LQ