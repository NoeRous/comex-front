import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
    
    @Injectable()
    export class InformacionService {
        informacion = {
            paso1Informacion: {
                selectedFlujo: null,
                selectedCuantitativas: [],
                selectedPeriocidad: null,
                selectedGestiones: [],
            },
            paso2Informacion: {
                selectedNandina: null,
                selectedClasificacion: null,
                selectedDepartamentos: [],
                selectedContinentes: [],
                selectedPaises: [],
                selectedMedios: [],
                selectedVias: [],
                selectedAduanas: [],
            }
        };
    
        private informacionComplete = new Subject<any>();
    
        informacionComplete$ = this.informacionComplete.asObservable();
    
        getInformacion() {
            return this.informacion;
        }

        clearInformacion() {
            this.informacion = {
                paso1Informacion: {
                    selectedFlujo: this.informacion.paso1Informacion.selectedFlujo,
                    selectedCuantitativas: [],
                    selectedPeriocidad: null,
                    selectedGestiones: [],
                },
                paso2Informacion: {
                    selectedNandina: null,
                    selectedClasificacion: null,
                    selectedDepartamentos: [],
                    selectedContinentes: [],
                    selectedPaises: [],
                    selectedMedios: [],
                    selectedVias: [],
                    selectedAduanas: [],
                }
            };
            return this.informacion;
        }
    
        setInformacion(informacion) {
            this.informacion = informacion;
        }
    
        complete() {
            this.informacionComplete.next(this.informacion.paso1Informacion);
        }
    }
    