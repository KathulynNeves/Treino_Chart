document.getElementById('GeraChart').addEventListener('click', processarCSV);

function processarCSV() {
    const tipoGrafico = document.querySelector('.TipoGraf').value;
    const fileInput = document.getElementById('csvFile');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        const lines = content.split('\n');
        const labels = [];
        const deposits = [];
        const withdrawals = [];

        for (let i = 1; i < lines.length; i++) {
            const columns = lines[i].split(',');
            labels.push(columns[0]);
            deposits.push(parseInt(columns[1]));
            withdrawals.push(parseInt(columns[2]));
        }

        renderChart(labels, deposits, withdrawals, tipoGrafico);
    };

    reader.readAsText(file);
}

function renderChart(labels, deposits, withdrawals, tipoGrafico) {
    const ctx = document.getElementById('chart').getContext('2d');
    let chart;

    if (tipoGrafico === 'linha') {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: '#15CAB6',
                        borderColor: '#15CAB6',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: '#EF8A5A',
                        borderColor: '#EF8A5A',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else if (tipoGrafico === 'barra') {
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: '#15CAB6',
                        borderColor: '#15CAB6',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: '#EF8A5A',
                        borderColor: '#EF8A5A',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    else if (tipoGrafico === 'radar') {
        chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: '#15CAB6',
                        borderColor: '#15CAB6',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: '#EF8A5A',
                        borderColor: '#EF8A5A',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    else if (tipoGrafico === 'pizza') {
        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: '#15CAB6',
                        borderColor: '#15CAB6',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: '#EF8A5A',
                        borderColor: '#EF8A5A',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
